import React from "react";
import styled from "styled-components";

import ReactSelect from "react-select";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SelectLabel = styled.label`
  margin-bottom: 10px;
`;

const Select = ({ label, options, value, onChange }) => {
  return (
    <SelectContainer>
      <SelectLabel>{label}</SelectLabel>
      <ReactSelect options={options} value={value} onChange={onChange} />
    </SelectContainer>
  );
};

export default Select;
