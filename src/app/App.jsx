import { useEffect, useState } from "react";
import { Header } from "../widgets/header";
import "./styles/index.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return <Header />;
}

export default App;
