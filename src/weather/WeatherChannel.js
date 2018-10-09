import React from 'react';


import {FaSearch} from 'react-icons/fa';

import CityCondition from './CityConditon';
import Forecaster from './Forecaster';

import{fetchConditionData, fetchForecast} from '../api/weather2';


export default class WeatherChannel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            curCity:'',
            condition:{
                city: 'Brisbane',
                // temp : data.temp_c,
                temp: {C: 0, F: 0},
                weather: 'weather'
            },
            days:[                
                {weekday: 'mon', high:19, low:11},
                {weekday: 'Wed', high:23, low:18},
                {weekday: 'Thu', high:29, low:18},
            ]
        };
    }

    handleCityChange(event){
        const value = event.target.value;
        this.setState({curCity: value});
    }
    
    onConditionLoad(data){
        const condition = {
            city: data.display_location.full,
            // temp : data.temp_c,
            temp: {C: data.temp_c, F: data.temp_f},
            weather: data.weather
        }
        this.setState({condition: condition});
    }

    onForecastLoad(data){
        const days = [
            {weekday: data[0].date.weekday, 
                     high:data[0].high.celsius, 
                    low:data[0].low.celsius},
            {weekday: data[1].date.weekday, 
                        high:data[1].high.celsius, 
                         low:data[1].low.celsius},
            {weekday: data[2].date.weekday, 
            high:data[2].high.celsius, 
                low:data[2].low.celsius}
            ]
        // let days = data.map((day) =>
        //     day ={weekday: data.date.weekday,
        //         high:data.high.celsius, 
        //         low:data.low.celsius}
        //     );

            // for(let i = 0; i<6; i++){
            //     var days= [{
            //         weekday: data[i].date.weekday, 
            //         high:data[i].high.celsius, 
            //         low:data[i].low.celsius
            //     }]
            // }
        this.setState({days: days});
    }

        
      


    

    handleSearch(){
        const city = this.state.curCity;
        fetchConditionData(city).then(data => {
             this.onConditionLoad(data);
        })
        fetchForecast(city).then(data =>{
            this.onForecastLoad(data);
        }
        )
    }

    render(){
        return(
            <React.Fragment>
                <nav>
                    <div style={{flex:1}}>
                        <input className="search-input" value = {this.state.curCity} onChange={this.handleCityChange.bind(this)}/>
                        <button className="search-btn" onClick= {this.handleSearch.bind(this)} ><FaSearch /></button>
                        <button className="temp-switch">
                        <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                        C
                        </button>
                    </div> 
                    
                </nav>   
                       
                <main>
                    <section className="weather-condition">
                        <CityCondition data={this.state.condition} />
                    </section>
                    <section>
                        <Forecaster days={this.state.days} />
                    </section>
                </main>
            </React.Fragment>

        )
    }
}