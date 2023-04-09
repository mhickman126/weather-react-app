import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Atlanta" />
      <footer className="footer">
        <a
          className="footer"
          href="https://github.com/mhickman126/weather-react-app"
        >
          Open-source code
        </a>
        &nbsp;by Michelle Hickman
      </footer>
    </div>
  );
}
