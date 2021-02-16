import React, { Component } from "react";


class Error extends Component {
  render() {
    return (
      <div className="col-md-6 m-md-5 mt-5">
        <div className="alert alert-danger" role="alert">
          {this.props.message}
        </div>
      </div>
    );
  }

  
}

export default Error;
