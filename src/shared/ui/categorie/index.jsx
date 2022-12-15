import {
  Order,
  Registration,
  Ticket,
  Travels,
  Finance,
  Fine,
} from "../../icon";

export const Categorie = ({ flag }) => {
  return (
    <>
      {flag && (
        <>
          {flag === "Заказы" ? <Order /> : null}
          {flag === "Регистрации" ? <Registration /> : null}
          {flag === "Билеты" ? <Ticket /> : null}
          {flag === "Путешевствия" ? <Travels /> : null}
          {flag === "Финансы" ? <Finance /> : null}
          {flag === "Штрафы и налоги" ? <Fine /> : null}
        </>
      )}
    </>
  );
};
