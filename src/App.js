import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
          <footer>
            This project was coded by Anna Knysh and is{" "}
            <a
              href="https://github.com/annaknish/react-weather-app-new"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on Netlify
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
