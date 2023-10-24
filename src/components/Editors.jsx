/* eslint-disable react/prop-types */
import Editor from "@monaco-editor/react";
import styles from "./editors.module.css";

const { langContainer, editorTitle } = styles;

const Editors = ({
  handleHTMLEditorChange,
  handleCSSEditorChange,
  handleJSEditorChange,
  theme,
}) => {
  return (
    <div>
      <div className={langContainer}>
        <div className={editorTitle}>HTML</div>
        <Editor
          height="30vh"
          defaultLanguage="html"
          defaultValue="<!-- Enter your code here -->"
          theme={theme}
          onChange={handleHTMLEditorChange}
        />
      </div>

      <div className={langContainer}>
        <div className={editorTitle}>CSS</div>
        <Editor
          height="30vh"
          defaultLanguage="css"
          defaultValue="/* Enter your code here */"
          theme={theme}
          onChange={handleCSSEditorChange}
        />
      </div>

      <div className={langContainer}>
        <div className={editorTitle}>JavaScript</div>
        <Editor
          height="30vh"
          defaultLanguage="javascript"
          defaultValue="// Enter your code here"
          theme={theme}
          onChange={handleJSEditorChange}
        />
      </div>
    </div>
  );
};

export default Editors;
