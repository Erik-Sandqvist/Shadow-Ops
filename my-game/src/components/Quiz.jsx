import { useState } from "react";

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

  function handleOptionClick(index) {
    setSelected(index);
    if (index === questions[current].answer) {
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
    let finalScore = score;
    if (validatePassword(passwordInput)) {
      finalScore += 1; // Lägg till poäng för starkt lösenord
    }
    setScore(finalScore);
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
              <button key={index} onClick={() => handleOptionClick(index)}>
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
        <p>Din poäng: {score} av {questions.length}</p>
      )}
    </div>
  );
}