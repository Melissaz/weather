import React, { Component } from 'react';

import './styles/main.css';

import Header from './weather/Header';

import WeatherChannel from './weather/WeatherChannel';

import Footer from './weather/Footer';

class App extends Component {
  render() {
    return (
      <div className = "weather-channel__container">
     <Header />

     <WeatherChannel />
     <Footer />
     
      </div>
    );
  }
}

export default App;
