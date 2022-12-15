import styles from "./index.module.css";

export const Accent = ({ read }) => {
  return (
    <div
      className={read ? `${styles.accent} ${styles.active}` : styles.accent}
    ></div>
  );
};
