import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 15px;
  padding: 30px;
  flex: 200px;
  height: 200px;
  color: white;
  cursor: pointer;
  transition: 500ms;
  background-color: black;
  text-align: center;
  text-decoration: none;

  :hover {
    border: 1px solid gold;
    transform: scale(1.1);
    z-index: 1;
  }
`;

export const Name = styled.h2``;

export const Homeworld = styled.p`
  margin: 0;
`;

export const Population = styled.p`
  margin: 0;
`;
