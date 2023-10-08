import React, { useState } from "react";
import ExpenseItem from "./component/ExpenseItem";
import ExpenseFilter from "./component/ExpenseFilter";
const Expenses = (props) => {
  const [filteredyear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };
  const newItems=props.items.filter((item)=>{
    if(item.date.getFullYear()==filteredyear)
    {
      return item;
    }
  })
  return (
    <div>
      <ExpenseFilter selected={filteredyear} onfilter={filterChangeHandler} />;
      {newItems.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amt={expense.amt}
          date={expense.date}
        />
      ))}
    </div>
  );
};
export default Expenses;
