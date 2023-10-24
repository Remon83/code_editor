import styles from "./navbar.module.css";

const { nav } = styles;

/* eslint-disable react/prop-types */
const Navbar = ({ theme, handleThemeChange }) => {
  const themes = [
    { label: "Dark", value: "vs-dark" },
    { label: "Light", value: "vs" },
    { label: "High Contrast", value: "hc-black" },
  ];
  return (
    <div className={nav}>
      <select value={theme} onChange={handleThemeChange}>
        {themes.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Navbar;
