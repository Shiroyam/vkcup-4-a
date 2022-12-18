import styles from "./index.module.css";

export const Avatar = ({ img }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})`, backgroundSize: "32px 32px" }}
      className={styles.avatar}
    ></div>
  );
};
