import React from "react";
import PropTypes from "prop-types";

import { InputContainer, InputLabel, InputComponent } from "./InputStyle";

const Input = ({ type, value, onChange, label, placeholder }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputComponent
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
};

export default Input;
