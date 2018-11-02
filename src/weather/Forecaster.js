import React from 'react';
import '../styles/weatherChannel.css';

export default function Forecaster(props){
  const days = props.days;
    let rows = days.map((day,i) =>{
      return <DailyItem key={i} day = {day} unit={props.unit}/>
    });
    return(
    <div>{rows}</div>
  );
}

function DailyItem(props){
  const day = props.day;
  const tempHigh = (props.unit === 'C') ? day.high.C : day.high.F ;
  const tempLow = (props.unit === 'C') ? day.low.C : day.low.F ;
  return(
  <section className="forecastcontainer">
    <div className ="row onforecastload">
      <span className="col-3 onforecastload_con" >{day.weekday}</span>
      <span className="col-3 onforecastload_con" ><img className="forecasticon"src ={day.icon} alt="weathericon" /></span>
      <span className="col-3 onforecastload_con" >{tempHigh}</span>
      <span className="col-3 onforecastload_con" >{tempLow}</span>
    </div>
</section>
  )
}