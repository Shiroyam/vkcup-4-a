import styles from "./index.module.css";

export const ButtonBorder = ({ text, svg, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <div className={styles.text}>{text}</div>
      <img className={styles.pen} src={svg} />
    </button>
  );
};
