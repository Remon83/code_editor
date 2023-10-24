/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styles from "./output.module.css";

const { output, outputTitle } = styles;

export const Output = ({ html, css, js }) => {
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
      `
      );
    }, 500);
    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <div className={output}>
      <div className={outputTitle}>Output</div>
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts allow-modals"
        width="100%"
        height="100%"
        frameBorder={0}
      ></iframe>
    </div>
  );
};

export default Output;
