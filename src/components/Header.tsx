import React from "react";
import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";

const StyledHeader = styled.header`
  height: 5rem;
  padding: 0 12rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 5px #f0f1f6;
`;

const Logo = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 1px;
`;

const Logout = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ff6058;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>Shapes</Logo>
      <Logout>
        Logout
        <IoExitOutline />
      </Logout>
    </StyledHeader>
  );
};

export default Header;
