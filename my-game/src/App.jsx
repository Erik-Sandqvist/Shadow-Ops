import { useState } from "react";
import Facts from "./components/Facts";
import Quiz from "./components/Quiz";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false); // State för att styra visningen

  return (
    <div
      className="App"
      style={{
        fontFamily: "Arial, sans-serif",
        width: "100%",
      }}
    >
      {!showQuiz ? (
        <div>
          <Facts />
          <button
            onClick={() => setShowQuiz(true)}
           className="start"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <div>
          <Quiz />
        </div>
      )}
    </div>
  );
}