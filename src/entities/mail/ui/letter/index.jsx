import { To, Accent, Avatar, Note, Categorie } from "../../../../shared/ui";
import { RUDate } from "../../../../shared/lib";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

export const Letter = ({ data }) => {
  const [flagLength, setFlagLength] = useState(false);

  useEffect(() => {
    setFlagLength(data.to ? (data.to.length > 3 ? true : false) : null);
  }, [data]);

  return (
    <div className={styles.letter}>
      <div className={styles.accent}>
        <Accent read={data.read} />
      </div>
      <div className={styles.title}>{data?.title}</div>
      <div className={styles.categorie}>
        <Categorie flag={data.flag} />
        <div className={styles.textCategorie}>{data.flag}</div>
      </div>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <div
          className={styles.name}
        >{`${data?.author?.name} ${data?.author?.surname}`}</div>
        <div className={styles.date}>
          {data.date ? RUDate.format(new Date(data.date)) : null}
        </div>
        <div className={styles.notes}>
          <Note important={data?.important} bookmark={data?.bookmark} />
        </div>
        <div className={styles.to}>
          <div className={styles.who}>Кому:</div>
          {data.to
            ? data.to
                .filter((element, index) => {
                  if (flagLength) {
                    return index < 3;
                  }
                  return element;
                })
                .map((element, index) => (
                  <To key={index} name={element.name} surname={element.surname} />
                ))
            : null}
          {flagLength ? (
            <div className={styles.more}>
              ещё {data.to.length - 3} получателей
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.doc}>
        {data.doc ? (
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${data.doc.img})` }}
          />
        ) : null}
      </div>
      <div className={styles.text}>{data?.text}</div>
    </div>
  );
};
