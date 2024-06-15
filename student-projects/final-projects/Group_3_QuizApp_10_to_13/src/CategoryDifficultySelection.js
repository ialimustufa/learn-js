import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you're using React Router for navigation

const CategoryDifficultySelection = () => {
  const history = useHistory();
  const [category, setCategory] = useState(''); // State to hold selected category
  const [difficulty, setDifficulty] = useState(''); // State to hold selected difficulty

  const handleStartQuiz = () => {
    if (category && difficulty) {
      history.push(`/quiz/${category}/${difficulty}`); // Navigate to quiz page with selected category and difficulty
    } else {
      alert('Please select both category and difficulty.');
    }
  };

  return (
    <div className="quiz-selection">
      <h1>Welcome to the Quiz App</h1>
      <div className="selection-container">
        <div className="selection-item">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Please select --</option>
            <option value="Indian History">Indian History</option>
            <option value="Nature">Nature</option>
            <option value="Science">Science</option>
            <option value="Literature">Literature</option>
          </select>
        </div>
        <div className="selection-item">
          <label htmlFor="difficulty">Select Difficulty:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">-- Please select --</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <button className="start-button" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default CategoryDifficultySelection;
