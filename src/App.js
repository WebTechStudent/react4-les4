import "./App.css";

import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <br />
      <footer>
      This project was coded by{" "}
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Liudmyla
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/WebTechStudent/react4-les4"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react4-les4-homework.netlify.app/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a> 
      </footer>
    </div>
  );
}