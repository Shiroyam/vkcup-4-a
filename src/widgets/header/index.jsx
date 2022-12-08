import styles from "./index.module.css";
import { logoText } from "../../shared/ui/icon";
import { logo } from "../../shared/ui/icon";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logoText} src={logoText} alt="logo" />
      <img className={styles.logo} src={logo} alt="logo" />
    </header>
  );
};
