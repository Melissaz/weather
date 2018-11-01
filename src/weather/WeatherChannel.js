import React from 'react';
import {FaSearch} from 'react-icons/fa';
import CityCondition from './CityConditon';
import Forecaster from './Forecaster';

import{fetchConditionData, fetchForecast} from '../api/weather2';

import '../styles/weatherChannel.css';
import '../styles/bootstrap.min.css';



export default class WeatherChannel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            curCity:'sydney',
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
            ],
           error:'',
           daynumber:[5],
           foreColor5:'switch-active',
           foreColor10:'switch-unactive'
        };
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.switchForeDays5 = this.switchForeDays5.bind(this);
        this.switchForeDays10 = this.switchForeDays10.bind(this);
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

    onForecastLoad(data){
        let daynumber = this.state.daynumber; 
        const days = data.slice(0,daynumber).map(day=>{
            return{
              weekday:day.date.weekday_short,
              high:day.high.celsius,
              low:day.low.celsius,
              icon:day.icon_url}
          });

        this.setState({days: days});
    }


    handleSearch (city){
        if (!city){
            return;
        }
        fetchConditionData(city).then(data => this.onConditionLoad(data))
                                .catch(error =>{
                                    alert(error.message)
                                });
        fetchForecast(city).then(data => this.onForecastLoad(data))
                            .catch(error =>{
                                return;
                            });
    }

    
    switchForeDays5(){
         this.setState({daynumber:5, foreColor5:'switch-active', foreColor10:'switch-unactive'},this.componentDidMount());
    };

    switchForeDays10(){
        this.setState({daynumber:10, foreColor5:'switch-unactive', foreColor10:'switch-active'},this.componentDidMount());
    };

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
                    </div>         
                </nav>    
                <main className="row">
                    <section className="col-6">
                        <CityCondition data={this.state.condition} />
                    </section>
                    <section className="col-6">
                        
                        <div className="forecast__switch_5">
                            <button  className={this.state.foreColor5} onClick={()=> {this.switchForeDays5()}} >
                                    5 days
                            </button>
                            <button className={this.state.foreColor10} onClick={()=>{this.switchForeDays10()}}>
                                10 days
                            </button>
                        </div>
                        <Forecaster days={this.state.days} />
                        
                    </section>
                </main>
            </React.Fragment>

        )
    }
}