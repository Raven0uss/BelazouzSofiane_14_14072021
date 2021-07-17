import React from "react";
import ReactDatePicker from "react-datepicker";
import styled, { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const DatePickerLabel = styled.label`
  margin-bottom: 10px;
`;

const DatePickerWrapperStyles = createGlobalStyle`
.react-datepicker__input-container {
    width: 100%;

    > input {
      width: 100%;
    }
 }
`;

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
