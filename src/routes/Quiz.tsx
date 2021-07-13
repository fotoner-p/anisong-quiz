import React, {useEffect, useState, useCallback, useRef} from 'react';
import styled from "styled-components";
import axios from "axios";

import Article from "../components/Article";

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type AnswerItmeProps = {
  isAnswer: boolean
}

const AnswerItem = styled.div<AnswerItmeProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  border: solid 1px ${(props)=> props.isAnswer? props.theme.color.main: "darkgrey"};
  
  ${(props)=> props.isAnswer? "background-color: #7e6ca8; color: #fff; font-weight: bold;" : ""}

  &:hover{
    border: solid 1px ${(props) => props.theme.color.mainBright};
    color: ${(props) => props.theme.color.mainBright};
    transition: all .1s ease;
  }
  &:not(:last-child){
    margin-bottom: 20px;
  }
`

type QuizSet = {
  quiz_id: string,
  preview_url: string,
  items: Item[]
}

type Item = {
  id: string,
  song_name: string,
  artists: string
}

const Quiz:React.FC = () =>{
  const [quiz, setQuiz] = useState<QuizSet>()
  const [target, setTarget] = useState<string>("")
  const audioRef = useRef<HTMLAudioElement>(null)

  const loadQuiz = useCallback(() =>{
    axios.get("http://anisong.fotone.moe:8000/quiz")
      .then((res) => {
        setQuiz(res.data)
      })
  }, []);

  const handleClick = useCallback((id: string)=>{
    setTarget(id);
  },[])

  const handlePlay = useCallback(()=>{
    const id = setInterval(()=>{
      if (audioRef.current) {
        let vol: number = audioRef.current.volume;
        if (vol < 0.98){
          audioRef.current.volume += 0.03;
        }
        else {
          clearInterval(id);
        }
      }
    }, 100)


  },[])

  useEffect(()=>{
    loadQuiz()
  }, [])

  useEffect(()=>{
    if (quiz && audioRef.current) {
      console.log(quiz);
      audioRef.current.muted = false;
      audioRef.current.volume = 0.0;
      audioRef.current.play();
    }
  }, [quiz])

  return (
    <Article>
      <audio src={quiz? quiz.preview_url: ""} muted autoPlay ref={audioRef} onPlay={handlePlay} />
      <AnswerContainer>
        {quiz&&quiz.items.map(res =>
          <AnswerItem isAnswer={res.id === target} key={res.id} onClick={() => handleClick(res.id)}>
            {res.artists} - {res.song_name}
          </AnswerItem>
        )}
      </AnswerContainer>
    </Article>
  );
}

export default Quiz;
