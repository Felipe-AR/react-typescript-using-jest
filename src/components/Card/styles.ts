import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled('div')`
  background: ${colors.bg.terciary};
  border: 2px solid ${colors.bg.secondary.black};
  box-sizing: border-box;
  border-radius: 64px 64px 0px 0px;
  padding: 80px;
  display: flex;
  flex: 1;
  margin-top: -32px;
  justify-content: center; 
`