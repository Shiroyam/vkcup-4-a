import { Accent, Avatar, Note } from "../../../../shared/ui";
import { RUDate } from "../../../../shared/lib";
import styles from "./index.module.css";

export const Letter = ({ data }) => {
  return (
    <div className={styles.letter}>
      <div className={styles.title}>{data?.title}</div>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <div
          className={styles.name}
        >{`${data?.author?.name} ${data?.author?.surname}`}</div>
        <div className={styles.date}>{data.date ? RUDate.format(new Date(data.date)) : null}</div>
        <div className={styles.notes}>
          <Note important={data?.important} bookmark={data?.bookmark} />
        </div>
        <div className={styles.to}>
          Кому: Вы, Андрей Щербаков, Dmitry Petrov, Валерий Чкалов ещё 5
          получателей{" "}
        </div>
      </div>
      <div className={styles.doc}></div>
      <div className={styles.text}>{data?.text}</div>
    </div>
  );
};
