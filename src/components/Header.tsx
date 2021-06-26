import React from "react";
import styled, { css } from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import AppContext from "../contexts/AppContext";

const StyledHeader = styled.header`
  height: 5rem;
  padding: 0 12rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 5px #f0f1f6;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      padding: 0 3rem;
    }
  `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      padding: 0 2rem;
    }
  `}
`;

const Logo = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 1px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      font-size: 1.5rem;
    }
  `}
`;

const Logout = styled.button`
  width: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ff6058;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
`;

interface IHeaderProps {
  loggedIn?: boolean;
}

const Header = ({ loggedIn }: IHeaderProps) => {
  const logout = React.useContext(AppContext).changeLoginState;
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    logout();
    history.push("/");
  };

  return (
    <StyledHeader>
      <Logo>Shapes</Logo>
      {loggedIn && (
        <Logout onClick={handleLogout}>
          Logout
          <IoExitOutline />
        </Logout>
      )}
    </StyledHeader>
  );
};

export default Header;
