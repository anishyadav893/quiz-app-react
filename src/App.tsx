import React, {useState} from 'react';
import {fetchQuestions} from './API';
import {QuestionState, Difficulty} from './API';

import QuestionCard from './components/QuestionCard';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const NUM_QUESTIONS = 12;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(
        NUM_QUESTIONS,
        Difficulty.EASY
      );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  const nextQuestion = () => {
    
  }

  return (
      <div className='App'>
        <h1>QuizMaster</h1>
        <button className='start' onClick = {startTrivia}>
          Start Quiz
        </button>
        <p className="score">Score:</p>
        <p>Loading questions . . .</p>
        {/*<QuestionCard
                  questionNo = {number + 1}
                  numQuestions = {NUM_QUESTIONS}
                  question = {questions[number].question}
                  answers = {questions[number].answers}
                  userAnswer = {userAnswers ? userAnswers[number] : undefined}
                  callback = {checkAnswer}
                 />*/}
        <button className="next" onClick = {nextQuestion}>
          Next Question
        </button>
      </div>
    );
}

export default App;
