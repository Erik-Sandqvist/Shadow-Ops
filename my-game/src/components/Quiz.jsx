import { useState } from "react";
import "../Quiz.css";

const questions = [
  {
    question: "Which is a secure password?",
    options: [
      "123456",
      "password",
      "G3n!u$P@ssw0rd",
      "qwerty",
    ],
    answer: 2,
  },
  {
    question: "Why is it a bad idea to share your password with someone, even if you trust them?",
    options: [
      "It may be inconvenient for the other person",
      "They might forget it",
      "It violates most email providers' terms",
      "It increases the risk of data misuse or accidental exposure",
    ],
    answer: 3,
  },
  {
    question: "What is one recommended feature of a strong password?",
    options: [
      "It includes your birthdate for easy recall",
      "It uses only lowercase letters to stay simple",
      "It is at least 8 characters long and includes special characters",
      "It contains dictionary words for clarity",
    ],
    answer: 2,
  },
  {
    question: "Enter a password to assess its strength:",
    type: "input",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [results, setResults] = useState([]);

  function handleOptionClick(index) {
    const isCorrect = index === questions[current].answer;
    setResults([...results, { question: questions[current].question, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }
    if (current === questions.length - 1) {
      setShowResult(true); // Visa resultat direkt när sista frågan besvaras
    } else {
      setCurrent(current + 1);
    }
  }

  function handlePasswordInputChange(event) {
    setPasswordInput(event.target.value);
  }

  function validatePassword(password) {
    const isLongEnough = password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    return isLongEnough && hasSpecialChar;
  }

  function handleFinishQuiz() {
    const isPasswordStrong = validatePassword(passwordInput);
    setResults([...results, { question: "Password strength assessment", isCorrect: isPasswordStrong }]);
    if (isPasswordStrong) {
      setScore(score + 1);
    }
    setShowResult(true);
  }

  function handleRestartQuiz() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setPasswordInput("");
    setResults([]);
  }

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {!showResult ? (
        current < questions.length ? (
          questions[current].type === "input" ? (
            <div>
              <p>{questions[current].question}</p>
              <input
                type="password"
                value={passwordInput}
                onChange={handlePasswordInputChange}
                className="quiz-input"
              />
              <button onClick={handleFinishQuiz} className="answer-button">Next Question</button>
            </div>
          ) : (
            <div>
              <p>{questions[current].question}</p>
              {questions[current].options.map((option, index) => (
                <button 
                  key={index} 
                  onClick={() => handleOptionClick(index)} 
                  className="answer-button"
                >
                  {option}
                </button>
              ))}
            </div>
          )
        ) : null
      ) : (
        <div className="quiz-result">
          <p>Your score: {score} out of {questions.length}</p>
          <h2>Results:</h2>
          <ul className="quiz-summary">
            {results.map((result, index) => (
              <li key={index} className={result.isCorrect ? "correct" : "incorrect"}>
                {result.question} - {result.isCorrect ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
          <button onClick={handleRestartQuiz} className="answer-button">Restart Quiz</button>
        </div>
      )}
    </div>
  );
}