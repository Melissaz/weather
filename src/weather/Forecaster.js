import React from 'react';
import '../styles/weatherChannel.css';

export default function Forecaster(props){
  const days = props.days;
    let rows = days.map((day) =>{
      return <DailyItem key={day} day = {day} />
    });
    return(
    <div>{rows}</div>
  );
}

function DailyItem(props){
  const day = props.day;
  return(
  <section className="forecastcontainer">
    <div className ="row onforecastload">
      <span className="col-3 onforecastload_con">{day.weekday}</span>
      <span className="col-3 onforecastload_con" key={day.icon}><img className="forecasticon"src ={day.icon} alt="weathericon" /></span>
      <span className="col-3 onforecastload_con" >{day.high}</span>
      <span className="col-3 onforecastload_con" >{day.low}</span>
    </div>
</section>
  )
}