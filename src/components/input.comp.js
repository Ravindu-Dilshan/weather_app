import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="pt-4 mx-md-5 form col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a City Name"
          onChange={(e) => this.props.setQuery(e.target.value)}
          value={this.props.query}
          onKeyPress={this.props.search}
        ></input>
      </div>
    );
  }
}

export default Input;
