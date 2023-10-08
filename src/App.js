import React, { useState } from "react";
import ExpenseForm from "./component/ExpenseForm";
import Expenses from "./Expenses";
const DummyExpenses = [
  {
    title: "food",
    amt: "Rs 10",
    date: new Date(2021, 2, 27)
  },
  {
    title: "petrol",
    amt: "Rs 200",
    date: new Date(2020, 7, 15)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);
  const EventListnerHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h2>ExpenseItem:</h2>
      <ExpenseForm onAddEventListner={EventListnerHandler} />
      <Expenses items={expenses} />
      
    </div>
  );
};

export default App;
