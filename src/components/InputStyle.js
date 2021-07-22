import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-bottom: 2px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const InputLabel = styled.label`
  margin-bottom: 6px;
`;

const InputComponent = styled.input`
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(204, 204, 204);
  border-radius: 4px;
  padding: 2px 8px;
`;

export { InputComponent, InputLabel, InputContainer };
