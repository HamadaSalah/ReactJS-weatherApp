import React, {Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css'

const API_KEY = '7b5e540703fbbce1a13458f69fa87843';

class App extends Component {
  state  = {
    temprature : '',
    city : '',
    country : '',
    humidity : '',
    description : '',
    error : ''
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api.json();
    if (city && country) {
      this.setState({
        temprature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ''
    
      })  
    }
    else {
      this.setState({
        temprature : '',
        city : '',
        country : '',
        humidity : '',
        description : '',
        error : 'Please Enter Data'
    
      })
    }
    console.log(data)

  }
  render() {
    return (
      <div className="App">
        <h1>Weather Application</h1>
        <Form getWeather={this.getWeather} />
        <Weather 
          temprature={this.state.temprature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );  
  }
}
export default App;
