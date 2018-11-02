import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {FaThermometerEmpty} from 'react-icons/fa';

export default function Toolbar(props){
    return(
    <div>
        <div>
            <input className="search-input" value = {props.curCity} onChange={props.handleCityChange} />
            <button className="search-btn" onClick= {()=> {props.handleSearch(props.curCity)}} ><FaSearch /></button>
            
            <button className="search-unit" onClick= {()=> {props.handleUnitChange(props.unit)}}> 
             <FaThermometerEmpty /> <span>{props.unit} </span>
            </button>
        </div>     
    </div>
    );
}