import Chartbar from "./chartbar";
const Chart =(props)=>
{
    const datapointvalues=props.datapoints.map(datapoint=>datapoint.value);
    const totalmax=Math.max(...datapointvalues);
return (
    <div>
    {props.datapoints.map((datapoint)=>{
        <Chartbar key={datapoint.label} value={datapoint.value} maxValue={totalmax} label={datapoint.label}/>
    }
    )}
    </div>
    
)
}
export default Chart;