import React,{useState} from 'react';
const ExpenseForm=()=>
{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmt,setEnteredAmt]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    function Titlehandler(e) 
    {
        setEnteredTitle(e.target.value);
    }
    function amthandler(e) 
    {
        setEnteredAmt(e.target.value);
    }
    function datehandler(e) 
    {
        setEnteredDate(e.target.value);
    }
return (
    <div>
        <form>
            <label>ExpenseTitle:</label>
        <input type="text" id="text" autoComplete="off" onChange={Titlehandler}/>
            <label>ExpenseAmt:</label>
        <input type="number" id="number" autoComplete="off" onChange={amthandler}/>
            <label>ExpenseDate:</label>
        <input type="date" id="date" autoComplete="off" onChange={datehandler}/>
        <button>Submit</button>
        </form>
    </div>
);
}
export default ExpenseForm;