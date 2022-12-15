import { Bookmark, Exclamatory } from "../../icon";
import styles from "./index.module.css"

export const Note = ({ bookmark, important }) => {
  return (
    <div className={styles.notes}>
      {bookmark ? <div className={styles.bookmark}><Bookmark /></div> : null}
      {important ? <div className={styles.exclamatory}><Exclamatory /></div> : null}
    </div>
  );
};
