import ExpenseItem from './component/ExpenseItem';
import ExpenseForm from './component/ExpenseForm';
import ExpenseFilter from './component/ExpenseFilter';
import React,{useState} from 'react';
const App = ()=> {
  const expense=[{title:"food",amt:"Rs 10",LocationofExpenditure:"Hotel" ,date:new Date(2021,2,27)},
                  {title:"petrol",amt:"Rs 200",LocationofExpenditure:"petrolbunk",date:new Date(2020,7,15)}]
  const EventListnerHandler=(expense)=>{
    console.log("In App.js")
console.log(expense);
  }
  const [filteredyear,setFilteredYear]=useState('2020');
  const filterChangeHandler=(selectedyear)=>{
    setFilteredYear(selectedyear);
  }
   return (
  <div >
  <h2>ExpenseItem:</h2>
  <ExpenseForm onAddEventListner={EventListnerHandler}/>
  <ExpenseFilter selected={filteredyear} onfilter={filterChangeHandler}/>
  <ExpenseItem title={expense[0].title} amt={expense[0].amt} Location={expense[0].LocationofExpenditure} date={expense[0].date}/>
  <ExpenseItem title={expense[1].title} amt={expense[1].amt} Location={expense[1].LocationofExpenditure}date={expense[1].date}/>
  </div>
   );

}

export default App;
