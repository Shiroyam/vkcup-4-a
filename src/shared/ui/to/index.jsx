import styles from "./index.module.css";

export const To = ({ name, surname }) => {
  return <div className={styles.to}>{`${name} ${surname}`}</div>;
};
