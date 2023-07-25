import React, { useState, useEffect } from 'react';
import questions from '../data';
import useSound from 'use-sound';
import correct from '../assets/Correct.mp3';
import wrong from '../assets/Wrong.mp3';
import play from '../assets/Play.mp3';
import FiftyFifty from './FiftyFifty';

function Trivia({ setStop, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(null);
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(()=> {
    letsPlay();
  },[letsPlay]);

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
        callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => setClassName(a === question.correctAnswer ? "answer correct" : "answer wrong")
    );
    delay(5000, () => {
        if(a === question.correctAnswer){
            correctAnswer();
            delay(1000, () => {
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null)
            })
        } else {
            wrongAnswer();
            delay(1000, () =>{
                setStop(true);
            })
        }
    });
  };

  const handleFiftyFifty = (correctAnswer) => {
    const shuffledAnswers = question.answerOptions
    .filter((answer) => answer !== correctAnswer)
    .sort(() => 0.5 - Math.random());
    const twoOptions = [correctAnswer, shuffledAnswers[0]];
    setQuestion((prevQuestion) => ({
        ...prevQuestion,
        answerOptions: twoOptions,
    }));
  };



  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answerOptions.map((a, index) => (
          <div key={index} className={selectedAnswer === a ? className : "answer"} onClick={()=>handleClick(a)}>
            {a}
          </div>
        ))}
      </div>
      <div>
        <FiftyFifty question={question} handleFiftyFifty={handleFiftyFifty}/>
      </div>
    </div>
  );
}

export default Trivia;