import React from "react";
import PropTypes from "prop-types";

import ReactSelect from "react-select";

import { SelectContainer, SelectLabel } from "./SelectStyle";

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
