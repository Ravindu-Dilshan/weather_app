import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="m-3 text-white">
        <div className="cards text-center mt-5">
          <>
            <h3 className="card-title">
              {this.props.city}, {this.props.country}
            </h3>
            <h4 className="card-text">Tempreature</h4>
            <p className="card-text"></p>
            <h5 className="card-text">
              {this.props.temp_min} °C to {this.props.temp_max} °C
            </h5>
            <h5 className="card-text">
              {this.props.type} ({this.props.desc})
            </h5>
          </>
        </div>
      </div>
    );
  }
}

export default Weather;
