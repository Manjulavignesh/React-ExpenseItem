import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props)
{
    return <div>
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amt={props.amt} location={props.location}/>
        </div>
}
export default ExpenseItem;