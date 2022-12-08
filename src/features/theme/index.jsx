import { useEffect, useState } from "react";
import { ThemeSvg } from "./ThemeSvg";
import styles from "./index.module.css";

export const ChangeTheme = () => {
  const [theme, setTheme] = useState("light");
  const [ textTheme, setTextTheme ] = useState("cветлая");
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setTextTheme(textTheme === "cветлая" ? "тёмная" : "cветлая");
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div onClick={toggleTheme} className={styles.theme}>
      <ThemeSvg className={styles.svg} /> 
      <div className={styles.text}>Тема: {textTheme}</div>
    </div>
  );
};
