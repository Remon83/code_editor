import { useState } from "react";
import Editors from "./components/Editors";
import "./App.css";
import Output from "./components/Output";
import Navbar from "./components/Navbar";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [theme, setTheme] = useState("vs-dark");

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
  };
  const handleHTMLEditorChange = (value) => {
    setHtml(value);
  };
  const handleCSSEditorChange = (value) => {
    setCss(value);
  };
  const handleJSEditorChange = (value) => {
    setJs(value);
  };

  return (
    <div className="app">
      <div className="editors_containers">
        <Navbar theme={theme} handleThemeChange={handleThemeChange} />
        <Editors
          handleHTMLEditorChange={handleHTMLEditorChange}
          handleCSSEditorChange={handleCSSEditorChange}
          handleJSEditorChange={handleJSEditorChange}
          theme={theme}
        />
      </div>

      <Output html={html} css={css} js={js} />
    </div>
  );
}

export default App;
