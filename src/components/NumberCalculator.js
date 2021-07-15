import React from "react";
import AdditionComponent from "./AdditionComponent";
class NumberCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      sum: 0,
      type: "addition",
    };
  }

  render() {
    const typeHandler = () => {
      if (this.state.type === "addition") {
        return <AdditionComponent />;
      }
    };
    return (
      <div id="content">
        {typeHandler()}
        <h2>The result is: {this.state.sum}</h2>
      </div>
    );
  }
}

export default NumberCalculator;
