import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ListLetter } from "../../entities/mail/ui/list";
import { Header } from "../../widgets/header";
import { Sidebar } from "../../widgets/sidebar";
import styles from "./index.module.css";

const FolderPage = () => {
  const [mail, setMail] = useState([]);
  const { name } = useParams();
  const param = name === undefined ? "" : name;

  const FetchingData = async () => {
    const response = await fetch(`http://localhost:3000/${param}`);
    const data = await response.json();
    setMail(data);
  };

  useEffect(() => {
    FetchingData();
  }, [param]);

  return (
    <div className={styles.folderPage}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <main className={styles.main}>
        {mail.map((element, index) => (
          <Link
            to={`/${name}/${index}`}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <ListLetter data={element} />
          </Link>
        ))}
      </main>
    </div>
  );
};

export default FolderPage;
