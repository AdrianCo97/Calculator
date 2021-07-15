import React from "react";
class NumberCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      sum: 0,
      type: "",
    };
  }

  render() {
    return <h2>The result is: {this.state.sum}</h2>;
  }
}

export default NumberCalculator;
