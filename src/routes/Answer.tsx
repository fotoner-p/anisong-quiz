import React, {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"

import {submitQuiz} from "../lib/api"

import Article from "../components/Article"
import SongInfoBox from "../components/SongInfoBox"

import QuizSet from "../type/QuizSet"
import QuizResult from "../type/QuizResult"

interface LocationState {
  quiz: QuizSet;
  target: string;
}

const Answer: React.FC = () => {
  const location = useLocation<LocationState>()
  const [quiz, setQuiz] = useState<QuizSet>(location.state.quiz)
  const [target, setTarget] = useState<string>(location.state.target)
  const [result, setResult] = useState<QuizResult>()

  useEffect(()=>{
    submitQuiz(quiz.quiz_id, target)
      .then((res)=>{
        setResult(res.data);      
      })
  }, [])

  useEffect(() => {
    console.log(result);
  }, [result])

  return(
    <Article>
      {
        result?.info&&<SongInfoBox songInfo={result.info}/>
      }
    </Article>
  );
}

export default Answer