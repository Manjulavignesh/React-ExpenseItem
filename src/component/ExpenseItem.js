function ExpenseItem(props)
{
    return <div>
        <div><h2>{props.title}</h2></div>
        <div><h2>{props.amt}</h2></div>
        <div><h2>{props.LocationofExpenditure}</h2></div>
        </div>
}
export default ExpenseItem;