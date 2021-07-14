import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const InputLabel = styled.label`
  margin-bottom: 10px;
`;

const InputComponent = styled.input`
  width: 100%;
`;

const Input = ({ type, value, onChange, label }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputComponent type={type} value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default Input;
