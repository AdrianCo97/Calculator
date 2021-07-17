import React from "react";

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
        <form
          className={numberCalculatorStyle.formStyle}
          onSubmit={this.additionFunction}
        >
          <input
            className={numberCalculatorStyle.inputStyle}
            id="x-input"
            type="number"
          ></input>
          <h3>+</h3>
          <input
            className={numberCalculatorStyle.inputStyle}
            id="y-input"
            type="number"
          ></input>
          <button className={numberCalculatorStyle.formButtonStyle}>Calculate!</button>
        </form>
        <h3>sum is: {this.state.sum}</h3>
      </div>
    );
  }
}

export default AdditionComponent;
