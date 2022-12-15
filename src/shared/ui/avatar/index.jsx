import styles from "./index.module.css";

export const Avatar = ({ img }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={styles.avatar}
    ></div>
  );
};
