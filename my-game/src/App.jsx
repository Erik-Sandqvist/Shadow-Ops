// FILE: App.jsx
import Quiz from "./components/Quiz";

export default function App() {
  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Password Hygiene Quiz</h1>
      <Quiz />
    </div>
  );
}