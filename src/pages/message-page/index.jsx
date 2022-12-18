import { Letter } from "../../entities/mail/ui";
import { useParams } from "react-router-dom";
import { Header } from "../../widgets/header";
import { Sidebar } from "../../widgets/sidebar";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

const MessagePage = () => {
  const [message, setMessage] = useState([]);
  const { name, id } = useParams();

  const FetchingData = async () => {
    console.log(`http://localhost:3000/${name}?id=${id}`);
    const response = await fetch(`http://localhost:3000/${name}?id=${id}`);
    const data = await response.json();
    setMessage(data);
  };

  useEffect(() => {
    FetchingData();
  }, [id, name]);

  return (
    <div className={styles.messagePage}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <main className={styles.main}>
        <Letter data={message} />
      </main>
    </div>
  );
};

export default MessagePage;
