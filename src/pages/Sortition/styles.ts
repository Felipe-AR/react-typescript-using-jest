import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Button = styled('button')`
  width: 350px;
  height: 80px;
  font-size: 20px;
  box-shadow: 2px 2px 0px 1px #000000;
  border-radius: 45px;
  background: ${colors.bg.secondary.coral};
  color: ${colors.text.primary};
  cursor: pointer;
  margin: 16px 0;

  &:hover {
    background: ${colors.bg.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media screen and (max-width: 800px) {
    width: 220px;
    margin: 32px 0;
  }
`

export const Select = styled('select')`
  border-radius: 45px;
  height: 82px;
  width: 70%;
  box-sizing: border-box;
  padding: 0 32px;
  font-size: 20px;
  border: 2px solid black;
  box-shadow: 0px 2px 0px 1px ${colors.bg.secondary.black};

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const InformationMessage = styled('p')`
  font-size: 20px;
  font-weight: 200;
  margin: 32px 0;
`

export const WarningMessage = styled('p')`
  color: ${colors.bg.secondary.coral};
  font-size: 25px;
  font-size: 20px;
  font-weight: 200;
  margin: 32px 0;
`