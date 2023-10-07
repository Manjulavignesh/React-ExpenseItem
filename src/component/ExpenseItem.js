import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
const ExpenseItem = (props) =>
{
    const [amt,setAmt]=useState(props.amt);
    const eventhandler=()=>{
    setAmt('100$');
    }
    return <div>
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amt={amt} location={props.location}/>
        <button onClick={eventhandler}>ChangeExpenseAmt</button>
        </div>
}
export default ExpenseItem;