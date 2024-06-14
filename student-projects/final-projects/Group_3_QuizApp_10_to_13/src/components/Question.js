// Question.js

import React from 'react';

const Question = ({ question, handleAnswerClick }) => {
  return (
    <div className="question">
      <h3 className="question-text">{question.questionText}</h3>
      <div className="answer-options">
        {question.answerOptions.map((option, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswerClick(option.isCorrect)}
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
