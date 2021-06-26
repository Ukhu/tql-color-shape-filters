import React from "react";
import { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import AppContext from "../contexts/AppContext";

const LoginPageTitle = styled.h1`
  margin: 0 12rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      margin: 0 2rem;
      margin-top: 3rem;
      font-size: 1.4rem;
    }
  `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      margin: 0 1rem;
      margin-top: 2rem;
      font-size: 1.2rem;
    }
  `}
`;

const LoginForm = styled.form`
  margin: 0 12rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      margin: 0 2rem;
      margin-top: 2rem;
    }
  `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      margin: 0 1rem;
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  `}
`;

const LoginFormTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginFormLabel = styled.label`
  width: 20rem;
  margin: 0 auto;
  margin-bottom: 1rem;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 15rem;
    }
  `}
`;

const LoginFormInput = styled.input`
  width: 20rem;
  height: 3rem;
  padding: 0 1rem;
  background: #ffffff;
  margin: 0 auto;
  margin-bottom: 2rem;
  border-radius: 4px;
  border: 1px solid #e0e0e5;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 15rem;
    }
  `}
`;

const LoginFormButton = styled.button`
  width: 20rem;
  height: 3rem;
  background: blue;
  color: white;
  margin: 0 auto;
  margin-bottom: 2rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 15rem;
    }
  `}
`;

interface ICredentials {
  [key: string]: string;
}

const Login = () => {
  const history = useHistory();
  const { isLoggedIn, changeLoginState: login } = useContext(AppContext);

  const [credentials, setCredentials] = React.useState<ICredentials>({
    username: "Admin",
    password: "Admin123",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { username, password } = credentials;

    if (username === "Admin" && password === "Admin123") {
      localStorage.setItem("loggedIn", "true");
      login();
      history.push("/shapes");
    }
  };

  if (isLoggedIn) return <Redirect to="/shapes" />;

  return (
    <div>
      <Header />
      <LoginPageTitle>Welcome to Shapes App</LoginPageTitle>
      <LoginForm onSubmit={handleSubmit}>
        <LoginFormTitle>Login</LoginFormTitle>
        <LoginFormLabel htmlFor="username">Username</LoginFormLabel>
        <LoginFormInput
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          placeholder="Enter username..."
          onChange={handleChange}
        />
        <LoginFormLabel htmlFor="password">Password</LoginFormLabel>
        <LoginFormInput
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          placeholder="Enter password..."
          onChange={handleChange}
        />
        <LoginFormButton>Submit</LoginFormButton>
      </LoginForm>
    </div>
  );
};

export default Login;
