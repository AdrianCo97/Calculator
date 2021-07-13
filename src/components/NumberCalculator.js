import React from "react";
import numberCalculatorStyle from "./numberCalculatorStyle.module.css";
class NumberCalculator extends React.Component {
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
        <form
          className={numberCalculatorStyle.formStyle}
          onSubmit={this.additionFunction}
        >
          <input
            className={numberCalculatorStyle.inputStyle}
            id="x-input"
            type="text"
          ></input>
          <h3>+</h3>
          <input
            className={numberCalculatorStyle.inputStyle}
            id="y-input"
            type="text"
          ></input>
          <button>Calculate!</button>
        </form>

        <h2>The result is: {this.state.sum}</h2>
      </div>
    );
  }
}

export default NumberCalculator;
