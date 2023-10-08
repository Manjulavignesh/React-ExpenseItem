import ExpenseItem from "./component/ExpenseItem";
const ExpenseList=(props)=>
{
    console.log(props.items);
    if(props.items.length===0){
    return<h2>No expenses Found!!!</h2>;

    }
    if(props.items.length===1){
        return(<ul>
            {props.items.map((expense, index) => (
            <ExpenseItem
              key={index}
              title={expense.title}
              amt={expense.amt}
              date={expense.date}
               /> ))
               }
               <h2>Only single Expense here. Please add more...</h2></ul>)
    
        }
    return (
        <ul>
        {props.items.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amt={expense.amt}
          date={expense.date}
           /> ))
           }</ul>)
}
export default ExpenseList;