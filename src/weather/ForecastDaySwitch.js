import React from 'react';
import '../styles/weatherChannel.css';

export default function ForecastDaySwitch(props){
    return(
        <div className="forecast__switch_5">
            <button  className={props.foreColor5} onClick={()=> {props.switchForeDays5()}} >
                5 days
            </button>
            <button className={props.foreColor10} onClick={()=>{props.switchForeDays10()}}>
                10 days
            </button>
        </div>
    );
}