import React from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";

import {
  DatePickerContainer,
  DatePickerLabel,
  DatePickerWrapperStyles,
} from "./DatePickerStyle";

const DatePicker = ({ selected, onChange, label }) => {
  return (
    <DatePickerContainer>
      <DatePickerLabel>{label}</DatePickerLabel>
      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        wrapperClassName="date_picker full-width"
      />
      <DatePickerWrapperStyles />
    </DatePickerContainer>
  );
};

DatePicker.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

DatePicker.defaultProps = {
  label: "",
};

export default DatePicker;
