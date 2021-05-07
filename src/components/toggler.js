import { func, string } from "prop-types";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  margin: 10px;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.6rem;
`;

const Toggle = ({ theme, toggleTheme }) => {
  const invertedTheme = theme === "dark" ? "Light" : "Dark";
  return <Button onClick={toggleTheme}>{`${invertedTheme} mode`}</Button>;
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
