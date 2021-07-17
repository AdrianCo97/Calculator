import React from "react";
import numberCalculatorStyle from "./numberCalculatorStyle.module.css";
class MultiplicationComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      product: 0,
    };
  }
  additionFunction = (event) => {
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
        <form
          className={numberCalculatorStyle.formStyle}
          onSubmit={this.additionFunction}
        >
          <input
            className={numberCalculatorStyle.inputStyle}
            id="x-input"
            type="number"
          ></input>
          <h3>X</h3>
          <input
            className={numberCalculatorStyle.inputStyle}
            id="y-input"
            type="number"
          ></input>
          <button>Calculate!</button>
        </form>
        <h3>product is: {this.state.product}</h3>
      </div>
    );
  }
}

export default MultiplicationComponent;
