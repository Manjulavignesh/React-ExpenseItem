const Chartbar=(props)=>{
    let barheight='0%';
    if(props.maxvalue>0)
    {
        barheight=Math.round((props.value/props.maxvalue)*100)+'%';
    }
return (
    <div >
    {props.label}
    </div>
)
}
export default Chartbar;