import React, {useEffect, useState, useCallback, useRef} from 'react';
import {useHistory} from "react-router-dom";
import styled, {css} from "styled-components";

import {loadQuiz} from "../lib/api"

import Article from "../components/Article";
import NormalButton from "../components/NormalButton";

import QuizSet from "../type/QuizSet";


const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

enum PlayType {
  stop, playing, end
}

type PlayButtonProps = {
  status: PlayType
}

const PlayButton = styled.button<PlayButtonProps>`
  cursor: pointer;
  margin-right: 8px;
  width: 48px;
  height: 48px;
  background: #fff url('/assets/svg/${({status}) => status === PlayType.playing ? 'stop' : 'play'}.svg');
  background-size: contain;
`

type AnswerItemProps = {
  isAnswer: boolean
}

const AnswerItem = styled.div<AnswerItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  padding: 16px;
  border-radius: 16px;
  border: solid 2px ${
    (props)=> props.isAnswer? props.theme.color.main: props.theme.color.borderGrey
  };
  
  font-weight: bold;
  color: ${(props)=> props.theme.color.mainGrey};
  
  ${props=> 
    props.isAnswer&&
      css`
        background-color: #7e6ca8;
        color: #fff;
      `
  }

  &:hover{
    border: solid 2px ${(props) => props.theme.color.main};
    color: ${(props) => (props.isAnswer)? props.theme.color.mainWhite : props.theme.color.main};
    transition: all .1s ease;
  }
  &:not(:last-child){
    margin-bottom: 16px;
  }
`

const SubmitNav = styled.nav`
  margin-top: 20px;
  display: flex;
`

const Quiz:React.FC = () =>{
  const [quiz, setQuiz] = useState<QuizSet>()
  const [target, setTarget] = useState<string>("")
  const [status, setStatus] = useState<PlayType>(PlayType.end)

  const audioRef = useRef<HTMLAudioElement>(null)
  const history = useHistory()

  const initQuiz = useCallback( () =>{
    loadQuiz()
      .then((res)=>{
        setQuiz(res.data) 
      })
  }, []);

  const handleClick = useCallback((id: string)=>{
    setTarget(id);
  },[])

  const handleStart = useCallback(()=>{
    setStatus(PlayType.playing)
    const id = setInterval(()=>{
      if (audioRef.current) {
        let vol: number = audioRef.current.volume;
        if (vol < 0.2){
          audioRef.current.volume += 0.005;
        }
        else {
          clearInterval(id);
        }
      }
    }, 100)
  },[])

  const handlePause = useCallback(()=>{
    setStatus(PlayType.stop)
  },[])

  const handleEnded = useCallback(()=> {
    setStatus(PlayType.end)
  }, [])

  const handlePlayButton = useCallback(()=> {
    if (quiz && audioRef.current){
      switch (status) {
        case PlayType.playing:
          audioRef.current.pause()
          break
        case PlayType.stop:
          audioRef.current.play()
          break
        case PlayType.end:
          audioRef.current.currentTime = 0
          audioRef.current.play()
          break
      }
    }
  }, [status, quiz])

  const handleSubmit = useCallback(()=>{
    if (target !== ""){
      history.push({
        pathname: "/answer",
        state: {
          quiz: quiz,
          target: target,
        }
      })
    }

  },[target])

  useEffect(()=>{
    initQuiz()
  }, [])

  useEffect(()=>{
    if (quiz && audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.0;
      audioRef.current.play();
    }
  }, [quiz])

  return (
    <Article>
      <audio
        src={quiz? quiz.preview_url: ""}
        muted autoPlay
        ref={audioRef}
        onPlay={handleStart}
        onPause={handlePause}
        onEnded={handleEnded}
      />
      <AnswerContainer>
        {quiz&&quiz.items.map(res =>
          <AnswerItem isAnswer={res.id === target} key={res.id} onClick={() => handleClick(res.id)}>
            {res.artists} - {res.song_name}
          </AnswerItem>
        )}
      </AnswerContainer>
      <SubmitNav>
        <PlayButton status={status} onClick={handlePlayButton}/>
        <NormalButton disable={target === ""} onClick={handleSubmit}>
          정답확인하기
        </NormalButton>
      </SubmitNav>
    </Article>
  );
}

export default Quiz;
