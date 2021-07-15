import React from "react";
import AdditionComponent from "./AdditionComponent";
import MultiplicationComponent from "./MultiplicationComponent";
class NumberCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
    };

    this.typeHandler = this.typeHandler.bind(this);
  }

  componentHandler(){
    if (this.state.type === "addition") {
      return <AdditionComponent />;
    } else if (this.state.type === "multiplication") {
      return <MultiplicationComponent />;
    }
  };


  render() {
    
    return <div id="content">
      {this.componentHandler()}
    </div>;
  }
}

export default NumberCalculator;
