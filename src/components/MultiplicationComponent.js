import React from "react";
import Form from "./Form";
import numberCalculatorStyle from "./numberCalculatorStyle.module.css";
class MultiplicationComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      product: 0,
    };
  }
  multiplicationFunction = (event) => {
    event.preventDefault();

    let x = +document.getElementById("x-input").value;
    let y = +document.getElementById("y-input").value;

    let result = x * y;

    this.setState({ product: result });
  };

  render() {
    return (
      <div className={numberCalculatorStyle.divStyle}>
        <h2>Multiplication</h2>
        <Form valueSumbit={this.multiplicationFunction} />
        <h3>product is: {this.state.product}</h3>
      </div>
    );
  }
}

export default MultiplicationComponent;
