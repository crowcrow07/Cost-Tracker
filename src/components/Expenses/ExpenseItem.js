import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ title, amount, date }) {
  const [changeTitle, setChangeTitle] = useState(title);
  const clickHandler = () => {
    setChangeTitle("update");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{changeTitle}</h2>
        <div className="expense-item__price">{amount}만원</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
