import React, { Component } from 'react';

import './styles/main.css';

import Header from './weather/Header';

import WeatherChannel from './weather/WeatherChannel';

import Footer from './weather/Footer';

import background from  './images/sky.jpg';

var sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',

};

class App extends Component {
  componentDidMount(){
    document.title = "Weather"
  }
  render() {
    return (
      <div className = "weather-channel__container" style={sectionStyle}>
     <Header />
     <WeatherChannel />
     <Footer />
      </div>
    );
  }
}

export default App;


