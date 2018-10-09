import React from 'react';

export default function CityCondition(props){
   const condition = props.data;
   
  return(
      <div className="weather-condition">
      
        <div className="weather-condition__location">{condition.city}</div>
        <div className="weather-condition__cloud">{condition.weather}</div>
        <div className="weather-condition__temp">{condition.temp.C} </div>
        
        <div className="weather-condition__desc">
          <div>
             <span className="citem">20%</span>
          </div>
          <div>
             <span className="citem">3 km/h</span>
          </div>
          <div>
            <span className="citem">NE</span>
          </div>
        </div>
      </div>
    );
}