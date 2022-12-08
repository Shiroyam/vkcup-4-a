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
} from "../../shared/ui/icon";
import styles from "./index.module.css";

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.buttonBorder}>
        <ButtonBorder
          text="Написать письмо"
          svg={<Pen className={styles.pen} />}
        />
      </div>
      <Folder svg={<Mail className={styles.svg} />} text="Входящие" />
      <Folder svg={<Important className={styles.svg} />} text="Важное" />
      <Folder svg={<Send className={styles.svg} />} text="Отправленные" />
      <Folder svg={<Draft className={styles.svg} />} text="Черновики" />
      <Folder svg={<Archive className={styles.svg} />} text="Архив" />
      <Folder svg={<Spam className={styles.svg} />} text="Спам" />
      <Folder svg={<Trash className={styles.svg} />} text="Корзина" />
      <div className={styles.stick} />
      <div className={styles.buttonSvg}>
        <ButtonSvg svg={<Plus  className={styles.plus}/>} text="Новая папка" />
      </div>
      <div className={styles.theme}>
        <ChangeTheme />
      </div>
    </nav>
  );
};
