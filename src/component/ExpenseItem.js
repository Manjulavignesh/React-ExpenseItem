function ExpenseItem()
{
    const expenseDate=new Date(2021,2,27);
    const expenseItem="car Insurance";
    const expenseAmt=700;
    const LocationOfExpenditure="Insurance"
    return <div>
        <div><h2>{expenseDate.toISOString()}</h2></div>
        <div><h2>{expenseItem}</h2></div>
        <div><h2>{expenseAmt}</h2></div>
        <div><h2>{LocationOfExpenditure}</h2></div>
        </div>
}
export default ExpenseItem;