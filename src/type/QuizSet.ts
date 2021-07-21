type QuizSet = {
  quiz_id: string,
  preview_url: string,
  items: QuizItem[]
}

type QuizItem = {
  id: string,
  song_name: string,
  artists: string
}

export default QuizSet