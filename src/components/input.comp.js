import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="pt-4 m-auto form col-md-5">
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
