import React from "react";
import AdditionComponent from "./AdditionComponent";
import MultiplicationComponent from "./MultiplicationComponent";
class NumberCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "addition",
    };
  }

  render() {
    const typeHandler = () => {
      if (this.state.type === "addition") {
        return <AdditionComponent />;
      } else if (this.state.type === "multiplication") {
        return <MultiplicationComponent />;
      }
    };
    return <div id="content">{typeHandler()}</div>;
  }
}

export default NumberCalculator;
