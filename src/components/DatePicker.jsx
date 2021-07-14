import React from "react";
import ReactDatePicker from "react-datepicker";
import styled, { createGlobalStyle } from "styled-components";

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

export default DatePicker;
