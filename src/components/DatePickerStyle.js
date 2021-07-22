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

export { DatePickerContainer, DatePickerLabel, DatePickerWrapperStyles };
