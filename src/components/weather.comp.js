import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    const rise = new Date(this.props.sunrise * 1e3);
    const set = new Date(this.props.sunset * 1e3);
    const time = new Date(this.props.time * 1e3);

    this.state = {
      sunrise: rise.toLocaleTimeString(),
      sunset: set.toLocaleTimeString(),
      time: time.toDateString()
    };
  }

  render() {
    return (
      <div className="col-12 text-white px-4">
        <div className="card mx-auto weather-card">
          <span className="icon">{getWeatherIcon(this.props.icon)}</span>
          <div className="weather-name">
            {this.props.city}, {this.props.country}
          </div>
          <div>
            {this.props.type} ({this.props.desc})
          </div>
          <div>
            {this.state.time}
          </div>
          <div className="flex-grow-1">
            <table className="mx-auto w-50 my-3 p-2">
              <tbody>
                <tr>
                  <td>
                    <img src="https://img.icons8.com/windows/32/ffffff/temperature-low.png" />
                  </td>
                  <td>{this.props.temp}&nbsp;°C</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://img.icons8.com/material-rounded/24/ffffff/wind.png" />
                  </td>
                  <td>{this.props.wind}&nbsp;m/s</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://img.icons8.com/android/24/ffffff/humidity.png" />
                  </td>
                  <td>{this.props.humid}&nbsp;%</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://img.icons8.com/material-sharp/24/ffffff/air-instrumentation.png" />
                  </td>
                  <td>{this.props.pressure}&nbsp;hPa</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://img.icons8.com/ios-filled/32/ffffff/sky.png" />
                  </td>
                  <td>{this.props.cloud}&nbsp;%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-6">
              <img src="https://img.icons8.com/metro/26/ffffff/sunrise.png" />
              <span>&ensp;{this.state.sunrise}</span>
            </div>
            <div className="col-6">
              <img src="https://img.icons8.com/metro/26/ffffff/sunset.png" />
              <span>&ensp;{this.state.sunset}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Weather;

function getWeatherIcon(id) {
  if (id >= 200 && id <= 232) {
    return (
      <img src="https://img.icons8.com/office/100/000000/cloud-lighting--v1.png" />
    );
  } else if (id >= 300 && id <= 321) {
    return <img src="https://img.icons8.com/office/100/000000/keep-dry.png" />;
  } else if (id >= 500 && id <= 531) {
    return <img src="https://img.icons8.com/office/100/000000/rain.png" />;
  } else if (id >= 600 && id <= 622) {
    return <img src="https://img.icons8.com/office/100/000000/snow.png" />;
  } else if (id >= 701 && id <= 781) {
    return <img src="https://img.icons8.com/office/100/000000/wind--v1.png" />;
  } else if (id >= 801 && id <= 804) {
    return (
      <img src="https://img.icons8.com/office/100/000000/fog-day--v1.png" />
    );
  } else if (id == 800) {
    return <img src="https://img.icons8.com/office/100/000000/sun--v1.png" />;
  } else {
    return <p className="card-text">ERROR</p>;
  }
}
