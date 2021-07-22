import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SelectLabel = styled.label`
  margin-bottom: 6px;
`;

export { SelectContainer, SelectLabel };
