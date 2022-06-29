import React, { useEffect, useState } from 'react';
import { validate } from './validators';
import styles from './css/Input.module.css'

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};

const Input = props => {
  const [inputState, setInputState] = useState(INPUT_STATES.UNTOUCHED);

  const [value, setValue] = useState("");

  function handleBlur() {
    setInputState(null);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleFormStatus() {
    if (inputState === INPUT_STATES.INVALID) {
      // eslint-disable-next-line
      return "form-input " + "form-input--invalid";
    }
    return "form-input";
  }

  useEffect(() => {
    if (inputState !== INPUT_STATES.UNTOUCHED)
      validating(value);
  })

  function validating(value) {
    if (validate(value, props.validators)) {
      setInputState(INPUT_STATES.VALID);
    }
    else {
      setInputState(INPUT_STATES.INVALID);
    }
  }

  function handleErrorText() {
    if (inputState === INPUT_STATES.INVALID) {
      return props.errorText;
    }
  }

  return (
    <div className={handleFormStatus()} data-testid="form-input">
      <div className={styles.inputcontainer}>
        <label> {props.label} </label>
        <input type={props.type} id={props.id} onBlur={handleBlur} onChange={handleChange} />
      </div>
      <p>{handleErrorText()}</p>
    </div>
  )
};

export default Input;