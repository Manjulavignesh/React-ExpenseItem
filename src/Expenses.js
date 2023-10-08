import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
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
    <ExpenseList items={newItems}/> 
    </div>
  );
};
export default Expenses;
