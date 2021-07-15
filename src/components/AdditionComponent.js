import numberCalculatorStyle from "./numberCalculatorStyle.module.css";
function AdditionComponent() {
  function additionFunction(event) {
    event.preventDefault();

    let x = +document.getElementById("x-input").value;
    let y = +document.getElementById("y-input").value;

    let result = x + y;
  }

  return (
    <div className={numberCalculatorStyle.divStyle}>
      <form
        className={numberCalculatorStyle.formStyle}
        onSubmit={additionFunction}
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
    </div>
  );
}

export default AdditionComponent;
