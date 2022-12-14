import styles from "./index.module.css";

export const Avatar = (img) => {
  return (
    <div style={{ background: `url(${img})` }} className={styles.avatar}></div>
  );
};
