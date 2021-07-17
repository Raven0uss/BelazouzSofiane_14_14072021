import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const NotFound = () => {
  return (
    <Container>
      <h2>{window.location.pathname} not found.</h2>
      <Link to="/">Home</Link>
    </Container>
  );
};

export default NotFound;
