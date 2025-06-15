import { useState } from "react";
import Facts from "./components/Facts";
import Quiz from "./components/Quiz";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false); // State för att styra visningen

  return (
    <div
      className="App"
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        margin: "0 auto",
        width: "50%",
      }}
    >
      {!showQuiz ? (
        <div>
          <Facts />
          <button
            onClick={() => setShowQuiz(true)}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "lightblue",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Starta Quiz
          </button>
        </div>
      ) : (
        <div>
          <h1>Password Hygiene Quiz</h1>
          <Quiz />
        </div>
      )}
    </div>
  );
}