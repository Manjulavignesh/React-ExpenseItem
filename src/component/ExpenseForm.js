import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmt, setEnteredAmt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  function Titlehandler(e) {
    setEnteredTitle(e.target.value);
  }
  function amthandler(e) {
    setEnteredAmt(e.target.value);
  }
  function datehandler(e) {
    setEnteredDate(e.target.value);
  }
  const submit = (e) => {
    e.preventDefault();
    const obj = {
      title: enteredTitle,
      amt: enteredAmt,
      date: new Date(enteredDate),
    };
    props.onAddEventListner(obj);
    props.setediting();
    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  };
  const deleteItem = (e) => {
    e.preventDefault();
    props.setediting();
  };
  return (
    <div>
      <form onSubmit={submit}>
        <label>ExpenseTitle:</label>
        <input
          type="text"
          id="text"
          value={enteredTitle}
          autoComplete="off"
          onChange={Titlehandler}
        />
        <label>ExpenseAmt:</label>
        <input
          type="number"
          id="number"
          value={enteredAmt}
          autoComplete="off"
          onChange={amthandler}
        />
        <label>ExpenseDate:</label>
        <input
          type="date"
          id="date"
          value={enteredDate}
          autoComplete="off"
          onChange={datehandler}
        />
        <button onClick={deleteItem}>Cancel</button>
        <button>Add Expense</button>
      </form>
    </div>
  );
};
export default ExpenseForm;
