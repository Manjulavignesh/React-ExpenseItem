const ExpenseForm=()=>
{
    function evenhandler(e) 
    {
        console.log(e.target.value);
    }
return (
    <div>
        <form>
            <label>ExpenseTitle:</label>
        <input type="text" id="text" autoComplete="off" onChange={evenhandler}/>
            <label>ExpenseAmt:</label>
        <input type="number" id="number" autoComplete="off" onChange={evenhandler}/>
            <label>ExpenseDate:</label>
        <input type="date" id="date" autoComplete="off" onChange={evenhandler}/>
        <button>Submit</button>
        </form>
    </div>
);
}
export default ExpenseForm;