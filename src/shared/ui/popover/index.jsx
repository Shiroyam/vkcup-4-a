import { Portal } from "../../lib";
import styles from "./index.module.css";

export const Popover = () => {
  return (
    <Portal>
      <div className={styles.content}></div>
    </Portal>
  );
};
