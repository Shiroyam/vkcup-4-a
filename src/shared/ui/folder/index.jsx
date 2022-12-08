import styles from "./index.module.css";

export const Folder = ({ svg, text, count }) => {
  return (
    <div className={styles.folder}>
      <div className={styles.svg}>{svg}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
