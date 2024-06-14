import React, { useState, useEffect } from 'react';
import Question from './Question';
import questionsData from './questionsData';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [showReview, setShowReview] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray([...questionsData]);
    setShuffledQuestions(shuffled.slice(0, 10));
  }, []);

  useEffect(() => {
    let timerInterval;
    if (timer > 0 && !quizCompleted) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && !quizCompleted) {
      handleAnswerClick(false);
    }
    return () => clearInterval(timerInterval);
  }, [timer, quizCompleted]);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([...incorrectAnswers, shuffledQuestions[currentQuestionIndex]]);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setTimer(30);
    } else {
      setQuizCompleted(true);
    }
  };

  const moveToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    setTimer(30); // Reset timer for the new question
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setTimer(30);
    setIncorrectAnswers([]);
    const shuffled = shuffleArray([...questionsData]);
    setShuffledQuestions(shuffled.slice(0, 10));
  };

  const handleReviewIncorrect = () => {
    setShowReview(!showReview);
  };

  return (
    <div className="quiz">
      {quizCompleted ? (
        <div className="quiz-completed">
          <h2>Quiz Completed!</h2>
          <p>Your score is: {score} / {shuffledQuestions.length}</p>
          <button onClick={handleRestartQuiz} className="restart-button">Restart Quiz</button>
          <button onClick={handleReviewIncorrect} className="review-button">Review Incorrect Answers</button>
          {showReview && (
            <div className="review-section">
              <h3>Review Incorrect Answers:</h3>
              {incorrectAnswers.map((question, index) => (
                <div key={index} className="review-question">
                  <p><strong>Question:</strong> {question.questionText}</p>
                  <p><strong>Correct Answer:</strong> {question.answerOptions.find(option => option.isCorrect).answerText}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="quiz-info">
            <p>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</p>
            <p>Score: {score}</p>
            <p>Time left: {timer} seconds</p>
          </div>
          {shuffledQuestions.length > 0 && (
            <Question
              question={shuffledQuestions[currentQuestionIndex]}
              handleAnswerClick={handleAnswerClick}
            />
          )}
          <div className="navigation-buttons">
            <button
              onClick={() => moveToQuestion(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={() => moveToQuestion(currentQuestionIndex + 1)}
              disabled={currentQuestionIndex === shuffledQuestions.length - 1}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
