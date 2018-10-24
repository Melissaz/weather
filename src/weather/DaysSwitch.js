import React from 'react';

export default function Toolbar(){
    return(
    <div className="forecast__switch">
        <button className='forecast__switch_0 switch-active'>
          5 days
        </button>
        <button className='forecast__switch_1'>
          10 days
        </button>
    </div>
    );
}