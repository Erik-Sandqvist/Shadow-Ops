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
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleOptionClick(index) {
    setSelected(index);
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
    setShowResult(true);
  }

  function handleNext() {
    setSelected(null);
    setShowResult(false);
    setCurrent(current + 1);
  }

  if (current >= questions.length) {
    return <div>
      <h2>Spelet klart!</h2>
      <p>Din poäng: {score} / {questions.length}</p>
    </div>;
  }

  return (
    <div>
      <h2>{questions[current].question}</h2>
      <ul>
        {questions[current].options.map((option, i) => (
          <li key={i}>
            <button
              disabled={showResult}
              onClick={() => handleOptionClick(i)}
              style={{
                backgroundColor:
                  showResult
                    ? i === questions[current].answer
                      ? "lightgreen"
                      : i === selected
                      ? "salmon"
                      : ""
                    : "",
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {showResult && (
        <button onClick={handleNext}>
          Nästa fråga
        </button>
      )}
    </div>
  );
}
