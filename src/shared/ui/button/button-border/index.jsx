import styles from "./index.module.css";

export const ButtonBorder = ({ text, svg, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <div className={styles.text}>{text}</div>
      <div className={styles.svg}>{svg}</div>
    </button>
  );
};
