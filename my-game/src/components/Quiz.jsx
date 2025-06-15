import { useState } from "react";
import "../Quiz.css";

const questions = [
  {
    question: "Vilket är ett säkert lösenord?",
    options: [
      "123456",
      "password",
      "G3n!u$P@ssw0rd",
      "qwerty",
    ],
    answer: 2,
  },
  {
    question: "Vad bör du aldrig dela med andra?",
    options: [
      "Din favoritfärg",
      "Ditt lösenord",
      "Vad du åt till lunch",
      "Din favoritfilm",
    ],
    answer: 1,
  },
  {
    question: "Skriv in ett lösenord för att bedöma dess säkerhet:",
    type: "input",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [results, setResults] = useState([]); // Ny lista för att lagra resultat

  function handleOptionClick(index) {
    const isCorrect = index === questions[current].answer;
    setResults([...results, { question: questions[current].question, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
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
    setResults([...results, { question: "Bedömning av lösenord", isCorrect: isPasswordStrong }]);
    if (isPasswordStrong) {
      setScore(score + 1);
    }
    setShowResult(true);
  }

  return (
    <div>
      <h1>Quiz</h1>
      {current < questions.length ? (
        questions[current].type === "input" ? (
          <div>
            <p>{questions[current].question}</p>
            <input
              type="password"
              value={passwordInput}
              onChange={handlePasswordInputChange}
            />
            <button onClick={() => setCurrent(current + 1)}>Nästa fråga</button>
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
      ) : (
        <div>
          <button onClick={handleFinishQuiz}>Visa resultat</button>
        </div>
      )}
      {showResult && (
        <div>
          <p>Din poäng: {score} av {questions.length}</p>
          <h2>Resultat:</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                {result.question} - {result.isCorrect ? "Rätt" : "Fel"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}