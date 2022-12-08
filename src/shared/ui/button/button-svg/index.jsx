import styles from "./index.module.css"

export const ButtonSvg = ({ svg, text }) => {
  return (
    <button className={styles.button}>
      <div className={styles.svg}>{svg}</div><div className={styles.text}>{text}</div>
    </button>
  );
};
