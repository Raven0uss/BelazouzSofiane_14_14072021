import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  margin-top: 12px;
`;

const SaveButton = ({ disabled, title, action }) => {
  return (
    <Button
      disabled={disabled}
      title={title}
      onClick={action}
      style={
        disabled
          ? {
              cursor: "not-allowed",
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

SaveButton.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

SaveButton.defaultProps = {
  disabled: false,
};

export default SaveButton;
