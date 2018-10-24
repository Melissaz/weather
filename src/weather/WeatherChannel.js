import React from 'react';
import {FaSearch} from 'react-icons/fa';
import CityCondition from './CityConditon';
import Forecaster from './Forecaster';
import DaysSwitch from './DaysSwitch';

import{fetchConditionData, fetchForecast} from '../api/weather2';

import '../styles/weatherChannel.css';
import '../styles/bootstrap.min.css';


export default class WeatherChannel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            curCity:'brisbane',
            condition:{
                city: '',
                temp: {C:'', F: ''},
                weather: '',
                icon:'',
                humidity:'',
                wind:'',
                wind_dir:''
            },
            days:[                
                {weekday: '', high:'' , low:'', icon:''},
            ]
        };
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleCityChange(event){
        const value = event.target.value;
        this.setState({curCity: value});
    }
    
    onConditionLoad(data){
        const condition = {
            city: data.display_location.full,
            temp: {C: data.temp_c, F: data.temp_f},
            weather: data.weather,
            icon:data.icon_url,
            humidity:data.relative_humidity,
            wind:data.wind_kph,
            wind_dir:data.wind_dir

        }
        this.setState({condition: condition});
    }

    onForecastLoad(props){
        //const weekday = props.data.weekday;
        const days = [
            {weekday: props.map((weekday) => 
            <div className="forecastcontainer">
                <div className ="row onforecastload">
                    <span className="col-3 onforecastload_con">{weekday.date.weekday_short} </span>
                    <span className="col-3 onforecastload_con"><img className="forecasticon"src ={weekday.icon_url} alt="weathericon" /></span>
                   <span className="col-3 onforecastload_con"> {weekday.high.celsius}</span>
                   <span className="col-3 onforecastload_con">{weekday.low.celsius}</span>
                </div> 
            </div>
                )},
            ]
        this.setState({days: days});
    }


    handleSearch (city){
        console.log(city);
        fetchConditionData(city).then(data => {
             this.onConditionLoad(data);
        })
        fetchForecast(city).then(data =>{
            this.onForecastLoad(data);
        })
    }

    componentDidMount() {
    this.handleSearch(this.state.curCity);
    };

    render(){
        return(
            <React.Fragment>
                <nav>
                    <div>
                        <input className="search-input" value = {this.state.curCity} onChange={this.handleCityChange} />
                        <button className="search-btn" onClick= {()=> {this.handleSearch(this.state.curCity)}} ><FaSearch /></button>
                        <button className="temp-switch">
                        C
                        </button>
                    </div>         
                </nav>    
                <main className="row">
                    <section className="col-6">
                        <CityCondition data={this.state.condition} />
                    </section>
                    <section className="col-6">
                        <DaysSwitch />
                        <Forecaster days={this.state.days} />
                    </section>
                </main>
            </React.Fragment>

        )
    }
}