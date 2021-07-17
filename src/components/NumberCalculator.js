import React from "react";
import AdditionComponent from "./AdditionComponent";
import MultiplicationComponent from "./MultiplicationComponent";
import numberCalculatorStyle from "./numberCalculatorStyle.module.css";
class NumberCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
    };

    this.buttonHandler = this.buttonHandler.bind(this);
    this.componentHandler = this.componentHandler.bind(this);
  }

  buttonHandler(event) {
    let button = event.target.id;

    switch (button) {
      case "addition":
        this.setState({ type: "addition" });
        break;
      case "multiplication":
        this.setState({ type: "multiplication" });
        break;
    }
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
      <nav>
        <button id="addition" className={numberCalculatorStyle.buttonStyle} onClick={this.buttonHandler}>Addition</button>
        <button id="multiplication" className={numberCalculatorStyle.buttonStyle} onClick={this.buttonHandler}>Multiplication</button>
      </nav>
      {this.componentHandler()}
    </div>;
  }
}

export default NumberCalculator;
