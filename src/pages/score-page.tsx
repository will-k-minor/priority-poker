import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "../App.css";
import { Avatar } from "../components/atoms/avatar";
import { ScoreForm } from "../forms/score-form";
import { FieldValues } from "react-hook-form";

export function ScorePage() {
  const onScoreFormSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Avatar />
      </div>
      <ScoreForm onSubmit={onScoreFormSubmit} />
      <div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
