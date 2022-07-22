import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background-color: #030007;
  border-radius: 5px;
  border: 2px solid #6b00b8;
  box-sizing: border-box;
  color: #a11fff;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  outline: none;
  padding: 0.5rem 1.75rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: rgba(209, 173, 255, 0.55);
    color: white;
  }
`;
