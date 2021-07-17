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
  margin-bottom: 6px;
`;

const DatePickerWrapperStyles = createGlobalStyle`
.react-datepicker__input-container {
    width: 100%;

    > input {
      width: 100%;
      border-style: solid;
      border-width: 1px;
      border-color: rgb(204, 204, 204);
      border-radius: 4px;
      padding: 2px 8px;
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
