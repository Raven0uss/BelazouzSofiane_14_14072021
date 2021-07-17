import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-bottom: 2px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const InputLabel = styled.label`
  margin-bottom: 6px;
`;

const InputComponent = styled.input`
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(204, 204, 204);
  border-radius: 4px;
  padding: 2px 8px;
`;

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
