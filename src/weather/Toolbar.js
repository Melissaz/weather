import React from 'react';

export default function Toolbar(){
    return(
    <div>
        <input className="search-input" />
        <button className="search-btn"><i className="fa fa-search"></i></button>
        <button className="temp-switch">
          C
        </button>
    </div>
    );
}