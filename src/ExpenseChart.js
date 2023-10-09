import Chart from "./chart";
const ExpenseChart=(props)=>
{
const chartdatapoints=[{label:"jan",value:0},
{label:"feb",value:0},
{label:"mar",value:0},
{label:"apr",value:0},
{label:"may",value:0},
{label:"jun",value:0},
{label:"jul",value:0},
{label:"Aug",value:0},
{label:"Sep",value:0},
{label:"Oct",value:0},
{label:"Nov",value:0},
{label:"Dec",value:0}];
for(const data of props.items)
{
    const expenseMonth=data.date.getMonth();
    chartdatapoints[expenseMonth].value+=data.amt;
}
return <Chart datapoints={chartdatapoints}/>
}
export default ExpenseChart;