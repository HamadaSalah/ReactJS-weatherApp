import React, {Component} from 'react';
import Floor from 'math-floor';
const Weather = (props) => {
    // temprature={this.state.temprature}
    // city={this.state.city}
    // country={this.state.country}
    // ={this.state.humidity}
    // description={this.state.description}
    // error={this.state.error}
    const Ctemp = Floor(props.temprature-273.15); 
    return(
        <div>
        {props.temprature ?
            <ul>
            <li>temprature    : <span>{Ctemp}<sup>o</sup></span> </li>
            <li>city          : <span>{props.city}</span> </li>
            <li>country       : <span>{props.country}</span> </li>
            <li>humidity      : <span>{props.humidity} </span></li>
            <li>description   : <span>{props.description} </span></li>
            
            </ul> : <div>{props.error} </div>
        }
        </div>
    )
}
export default Weather;