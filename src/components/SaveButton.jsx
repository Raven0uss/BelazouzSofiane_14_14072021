import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 12px;
`;

const SaveButton = ({ disabled = false, title, action }) => {
  return (
    <Button
      disabled={disabled}
      title={title}
      onClick={action}
      style={
        disabled
          ? {
              cursor: "default",
            }
          : {
              cursor: "pointer",
            }
      }
    >
      {title}
    </Button>
  );
};

export default SaveButton;
