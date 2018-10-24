import React from 'react';

export default function Forecaster(props){
  const days = props.days;
    let rows = days.map((day) =>{
      return <DailyItem key={day} day = {day} />
    });
    return <div>{rows}</div>;
}

function DailyItem(props){
  const day = props.day;
  return(
  <section>
    <div >
      <span >{day.weekday}</span>
      <span >{day.high}</span>
      <span >{day.low}</span>
    </div>
</section>
  )
}