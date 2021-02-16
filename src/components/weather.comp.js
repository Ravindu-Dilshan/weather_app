import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    const rise = new Date(this.props.sunrise * 1e3);
    const set = new Date(this.props.sunset * 1e3);

    this.state = {
      sunrise: rise.toLocaleTimeString(),
      sunset: set.toLocaleTimeString(),
    };
  }

  render() {
    return (
      <div className="col-12 text-white">
        <div className="card">
          <span className="icon">{getWeatherIcon(this.props.icon)}</span>
          <div className="display-4">
            <p>
              {this.props.city}, {this.props.country}
            </p>
          </div>
          <div>
            {this.props.type} ({this.props.desc})
          </div>
          <div className="flex-grow-1">
            <p className="my-1">
              <img src="https://img.icons8.com/windows/32/ffffff/temperature-low.png" />
              <span>
               &nbsp;{this.props.temp_min}&nbsp;°C&nbsp;&ensp;to&nbsp;&ensp;{this.props.temp_max}&nbsp;°C
              </span>
            </p>
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
    return <img src="https://img.icons8.com/office/100/000000/cloud-lighting--v1.png" />
  } else if (id >= 300 && id <= 321) {
    return <img src="https://img.icons8.com/office/100/000000/keep-dry.png" />;
  } else if (id >= 500 && id <= 531) {
    return <img src="https://img.icons8.com/office/100/000000/rain.png" />;
  } else if (id >= 600 && id <= 622) {
    return <img src="https://img.icons8.com/office/100/000000/snow.png" />;
  } else if (id >= 701 && id <= 781) {
    return <img src="https://img.icons8.com/office/100/000000/wind--v1.png" />;
  } else if (id >= 801 && id <= 804) {
    return <img src="https://img.icons8.com/office/100/000000/fog-day--v1.png" />
  } else if (id == 800) {
    return <img src="https://img.icons8.com/office/100/000000/sun--v1.png" />;
  } else {
    return <p className="card-text">ERROR</p>;
  }
}
