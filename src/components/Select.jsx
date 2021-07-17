import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any,
    }).isRequired
  ).isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  label: "",
};

export default Select;
