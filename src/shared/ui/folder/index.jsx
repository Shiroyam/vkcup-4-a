import styles from "./index.module.css";

export const Folder = ({ isActive, svg, text }) => {
  return (
    <div
      className={isActive ? `${styles.folder} ${styles.active}` : styles.folder}
    >
      <div className={styles.svg}>{svg}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
