import React, { Component } from "react";
// import Alert from "react-bootstrap/Alert";
class CounterComponent extends Component {
  state = {
    count: 0
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = e => {
    console.log("product", e);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formalCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    return this.state.count === 0
      ? "badge badge-primary m-2"
      : "badge badge-warning m-2";
  }
  formalCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default CounterComponent;
