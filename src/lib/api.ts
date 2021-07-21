import { AxiosPromise } from "axios"
import qs from "querystring"
import baseAxios from "./baseAxios"


import QuizSet from "../type/QuizSet"

const loadQuiz = ():AxiosPromise => {
	return baseAxios.get('/quiz')
}

const submitQuiz = (quiz_id:string, answer:string):AxiosPromise => {
	return baseAxios.post('/quiz', qs.stringify({
		quiz_id: quiz_id,
		answer: answer
	}))
}

export { 
	loadQuiz,
	submitQuiz
}