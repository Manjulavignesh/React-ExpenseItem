import ExpenseItem from './component/ExpenseItem';
function App() {
  const expense=[{title:"food",amt:"Rs 10",LocationofExpenditure:"Hotel"},
                 {title:"petrol",amt:"Rs 200",LocationofExpenditure:"petrolbunk"}]
  return (
    <div >
      <h2>ExpenseItem:</h2>
        <ExpenseItem title={expense[0].title} amt={expense[0].amt} LocationofExpenditure={expense[0].LocationofExpenditure}></ExpenseItem>
        <ExpenseItem title={expense[1].title} amt={expense[1].amt} LocationofExpenditure={expense[1].LocationofExpenditure}></ExpenseItem>
    </div>
  );
}

export default App;
