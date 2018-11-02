import React from 'react';
import compass from '../images/icon-compass.png';
import umberella from '../images/icon-umberella.png';
import wind from '../images/icon-wind.png';


export default function CityCondition(props){
   const condition = props.data;
   const temp = (props.unit === 'C') ? condition.temp.C:condition.temp.F ;
  return(
      <div className="weather-condition">
      
        <div className="weather-condition__location">{condition.city}</div>
        <div className="weather-condition__cloud">{condition.weather}</div>
        <div className="weather-condition__temp row">
          <span className="col-sm-6">{temp}</span>  
          <span className="col-sm-6">°{props.unit}</span>
        </div>
        
        <div className="weather-condition__desc">
          <div>
             <img src = {umberella} alt="" /><span className="citem"> {condition.humidity}</span>
          </div>
          <div>
             <img src={wind}  alt=""/><span className="citem">{condition.wind}km/h</span>
          </div>
          <div>
            <img src={compass} alt="" />
            <span className="citem">
            
            {condition.wind_dir}
            </span>
          </div>
        </div>
      </div>
    );
}