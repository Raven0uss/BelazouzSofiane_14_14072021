import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 50%;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items: center;

  > div {
    margin-top: 12px;
  }
`;

const AddressFieldset = styled.fieldset`
  margin-top: 10px;
  width: 250px;
  background-color: #00000010;
  padding: 8px 20px;
  border-radius: 5px;

  > legend {
    background-color: #ffffff;
    padding: 0 12px;
    border-radius: 5px;
  }

  > div {
    margin-top: 12px;
  }

  @media (max-width: 400px) {
    width: 100%;
    > div {
      width: 90%;
    }
  }
`;

const SuccessMessage = styled.p`
  text-align: center;
  color: #4a934a;
  font-weight: bold;
`;

export { SuccessMessage, Container, Form, AddressFieldset };
