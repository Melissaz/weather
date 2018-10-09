import React from 'react';

export default function Forecaster(props){
  const days = props.days;
    let rows = days.map((day) =>{
      return <DailyItem  day = {day} />
    });
    return <div>{rows}</div>;
}

function DailyItem(props){
  const day = props.day;
  return(
  <section className="weather-forecast">
    <div className="weather-forecast__row">
      <span className="weather-forecast__day">{day.weekday}</span>
      <span className="weather-forecast__high">{day.high}</span>
      <span className="weather-forecast__low">{day.low}</span>
    </div>
</section>
  )
}