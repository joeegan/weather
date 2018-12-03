import React, { Component } from 'react';
import WindDirection from './WindDirection';
import axios from 'axios';
import './App.css';
import Figure from './Figure';
import Periods from './Periods';

const host = window.location.pathname.includes('localhost') ? 'https://weather-marshfield.herokuapp.com' : 'https://weather-marshfield.herokuapp.com'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    axios.get(`${host}/latest`)
      .then(res => {
        this.setState({
          ...res.data
        });
      }) // JSON-string from `response.json()` call
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="cols">
        <div className="col">
          <Figure val={this.state.temp_act} desc="Temp (Deg C)" />
          <Figure val={this.state.wind_chill_act} desc="WindChillCur (Deg C)" />
          <Figure val={this.state.dew_act} desc="Dew point temp (Deg C)" />
          <Figure val={this.state.hum_act} desc="Humidity (%)" />
        </div>
        <div className="col">
          <Figure val={this.state.wind_dir_act} desc="Wind dir" />
          <Figure val={this.state.wind_speed_act} desc="Wind speed" />
          {/* <WindDirection 
            deg={this.state.wind_dir_act} 
            speed={this.state.wind_speed_act}
            />
          <Periods /> */}
        </div>
        <div className="col">
          <Figure val={this.state.sol_rad_act} desc="Solar radiation (W/qm)" />
          <Figure val={this.state.rain_rate_act} desc="Rain rate (mm)" />
          {/* <Figure val={this.state.rain_total_daysum} desc="Rain total since midnight (mm)" /> */}
          {/* <Figure val={this.state.wind_speed_avg_60} desc="Average wind over the last hour (mph)" /> */}
        </div>
      </div>
    );
  }
}

export default App;
