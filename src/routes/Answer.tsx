import React, {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"

import axios from "axios";

import {submitQuiz} from "../lib/api"
import QuizSet from "../type/QuizSet"

import Article from "../components/Article"
import SongInfo from "../type/SongInfo"

interface LocationState {
  quiz: QuizSet;
  target: string;
}

type QuizResult = {
  status: string,
  info: SongInfo | undefined
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
      
    </Article>
  );
}

export default Answer