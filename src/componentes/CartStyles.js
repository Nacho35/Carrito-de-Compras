import styled from "styled-components";

export const Button = styled.button`
  padding: 8px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.4rem;
  font-size: medium;
  font-weight: 500;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;

  &:hover {
    background-color: ${(props) => props.theme.colors.four};
    color: ${(props) => props.theme.colors.three};
  }
  box-shadow: -2px 2px 16px rgba(0, 0, 0, 0.6);
`;
