import React from "react";
import Form from "./Form";
import numberCalculatorStyle from "./numberCalculatorStyle.module.css";
class AdditionComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      sum: 0,
    };
  }
  additionFunction = (event) => {
    event.preventDefault();

    let x = +document.getElementById("x-input").value;
    let y = +document.getElementById("y-input").value;

    let result = x + y;

    this.setState({ sum: result });
  };

  render() {
    return (
      <div className={numberCalculatorStyle.divStyle}>
        <h2>Addition</h2>
        <Form valueSumbit={this.additionFunction} />
        <h3>sum is: {this.state.sum}</h3>
      </div>
    );
  }
}

export default AdditionComponent;
