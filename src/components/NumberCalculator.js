import React from "react";
class NumberCalculator extends React.Component {
  constructor() {
    super();

    this.state = {
      sum: 0,
    };
  }

  additionFunction = (event) => {
    event.preventDefault();

    let x = document.getElementById("x-input").value;
    let y = document.getElementById("y-input").value;

    let result = +x + +y;

    this.setState({ sum: result });
  };

  render() {
    return (
      <container>
        <form>
          <input id="x-input" type="text"></input>
          <h3>+</h3>
          <input id="y-input" type="text"></input>
        </form>
      </container>
    );
  }
}

export default NumberCalculator;
