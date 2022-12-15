import { useEffect, useState } from "react";
import { ListLetter } from "../entities/mail/ui/list";
import { Header } from "../widgets/header";
import { Sidebar } from "../widgets/sidebar";
import "./styles/index.css";

function App() {
  const [mail, setMail] = useState([]);

  const FetchingData = async () => {
    const response = await fetch('http://localhost:3000/trash');
    const data = await response.json();
    setMail(data)
  }

  useEffect(()=> {
    FetchingData()
  },[])

  return (
    <>
      <Header />
      <Sidebar />
      {mail.map((element, index) => (
        <ListLetter key={index} data={element} />
      ))}
    </>
  );
}

export default App;
