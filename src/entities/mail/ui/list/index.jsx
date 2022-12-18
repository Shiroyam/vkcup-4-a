import { Accent, Avatar, Categorie, Note } from "../../../../shared/ui";
import { RUDate } from "../../../../shared/lib";
import { Doc } from "../../../../shared/icon";
import styles from "./index.module.css";

export const ListLetter = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.letter}>
      <div className={styles.accent}>
        <Accent read={data.read} />
      </div>
      <div className={styles.avatar}>
        <Avatar img={data?.author?.avatar} />
      </div>
      <div
        className={styles.author}
      >{`${data?.author?.name} ${data?.author?.surname}`}</div>
      <div className={styles.note}>
        <Note important={data.important} bookmark={data.bookmark} />
      </div>
      <div className={styles.title}>{data?.title}</div>
      <div className={styles.text}>{data?.text}</div>
      <div className={styles.svgs}>
        <div className={styles.categorie}>
          <Categorie flag={data.flag} />
        </div>
        {data.doc ? (
          <>
            <div className={styles.doc}>
              <Doc className={styles.svg} />
            </div>
          </>
        ) : null}
      </div>
      <div className={styles.date}>{RUDate.format(new Date(data?.date))}</div>
    </div>
  );
};
