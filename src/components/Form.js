import numberCalculatorStyle from "./numberCalculatorStyle.module.css";
function Form(props) {
  return (
    <form className={numberCalculatorStyle.formStyle} onSubmit={props.valueSumbit}>
          <input
            className={numberCalculatorStyle.inputStyle}
            id="x-input"
            type="number"
          ></input>
          <input
            className={numberCalculatorStyle.inputStyle}
            id="y-input"
            type="number"
          ></input>
          <button className={numberCalculatorStyle.formButtonStyle}>Calculate!</button>
     </form>
  )
}

export default Form;