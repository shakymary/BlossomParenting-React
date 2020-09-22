import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  height: 200px;
  background-color: tomato;
  justify-content: flex-end;
  padding: 20px;
  margin-top: -20px;
`;

const NavTitle = styled.h3`
  margin: 30px;
`;

const NavBar = () => {
  return (
    <NavContainer>
      <NavTitle>Start Here</NavTitle>
      <NavTitle>My Story</NavTitle>
      <NavTitle>Teachings</NavTitle>
      <NavTitle>Contact</NavTitle>
    </NavContainer>
  );
};

export default NavBar;
