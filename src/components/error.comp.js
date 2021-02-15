import React, { Component } from "react";


class Error extends Component {
  render() {
    return (
      <div className="m-5">
        <div className="alert bg-danger" role="alert">
          {this.props.message}
        </div>
      </div>
    );
  }

  
}

export default Error;
