import { ChangeTheme } from "../../features/theme";
import { ButtonBorder, ButtonSvg } from "../../shared/ui/button";
import { Folder } from "../../shared/ui/folder";
import {
  Archive,
  Draft,
  Important,
  Mail,
  Pen,
  Plus,
  Send,
  Spam,
  Trash,
} from "../../shared/icon";
import { Link, useParams } from "react-router-dom";
import styles from "./index.module.css";

export const Sidebar = () => {
  const { name } = useParams();
  return (
    <nav className={styles.sidebar}>
      <div className={styles.buttonBorder}>
        <ButtonBorder
          text="Написать письмо"
          svg={<Pen className={styles.pen} />}
        />
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Folder
          isActive={name === undefined ? true : false}
          svg={<Mail className={styles.svg} />}
          text="Входящие"
        />
      </Link>
      <Link to="/important" style={{ textDecoration: "none" }}>
        <Folder
          isActive={name === "important" ? true : false}
          svg={<Important className={styles.svg} />}
          text="Важное"
        />
      </Link>
      <Link to="/send" style={{ textDecoration: "none" }}>
        <Folder
          isActive={name === "send" ? true : false}
          svg={<Send className={styles.svg} />}
          text="Отправленные"
        />
      </Link>
      <Link to="/draft" style={{ textDecoration: "none" }}>
        <Folder
          isActive={name === "draft" ? true : false}
          svg={<Draft className={styles.svg} />}
          text="Черновики"
        />
      </Link>
      <Link to="/archive" style={{ textDecoration: "none" }}>
        <Folder
          isActive={name === "archive" ? true : false}
          svg={<Archive className={styles.svg} />}
          text="Архив"
        />
      </Link>
      <Link to="/spam" style={{ textDecoration: "none" }}>
        <Folder
          isActive={name === "spam" ? true : false}
          svg={<Spam className={styles.svg} />}
          text="Спам"
        />
      </Link>
      <Link to="/trash" style={{ textDecoration: "none" }}>
        <Folder
          isActive={name === "trash" ? true : false}
          svg={<Trash className={styles.svg} />}
          text="Корзина"
        />
      </Link>
      <div className={styles.stick} />
      <div className={styles.buttonSvg}>
        <ButtonSvg svg={<Plus className={styles.plus} />} text="Новая папка" />
      </div>
      <div className={styles.theme}>
        <ChangeTheme />
      </div>
    </nav>
  );
};
