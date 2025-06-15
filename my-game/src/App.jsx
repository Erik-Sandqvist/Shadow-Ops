// FILE: App.jsx
import Facts from "./components/Facts";
import Quiz from "./components/Quiz";

export default function App() {
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
      <Facts />
      <h1>Password Hygiene Quiz</h1>
      <Quiz />
    </div>
  );
}