import React from "react";
import styled, { DefaultTheme, ThemeProps } from "styled-components";

type width = `${number}${"px" | "%"}`;
type buttonType = "primary" | "secondary" | "alterative";

type Props = {
  theme: DefaultTheme;
  width?: width;
  format?: buttonType;
};
 
export const Button = styled.button<Props>`
  ${({ theme, width = "100%", format = "primary" }) => {
    const { background, color } = theme.button[format];
    return `
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    background:${background};
    color: ${color};
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    width: ${width};
    transition: all 0.3s ease-in-out;
    &:hover{
      color: ${background}; 
      background: ${color};
      border: 2px solid ${background}
    }
    `;
  }}
`;
