import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
const ExpenseItem = (props) =>
{
    const eventhandler=()=>{
    console.log("deleted");
    }
    return <div>
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amt={props.amt} location={props.location}/>
        <button onClick={eventhandler}>Delete Expense</button>
        </div>
}
export default ExpenseItem;