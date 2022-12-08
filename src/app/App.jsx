import { useEffect, useState } from "react";
import { Folder } from "../shared/ui/folder";
import { Mail } from "../shared/ui/icon";
import { Nav } from "../widgets/nav";
import "./styles/index.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return <Folder svg={<Mail />} text="Входящие" />;
}

export default App;
