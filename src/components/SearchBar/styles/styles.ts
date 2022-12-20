/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  border: 0;
  outline: 0;
  border-bottom: 2px solid white;
  caret-color: gold;
  color: white;
  background-color: transparent;
  text-align: center;
`;

export const Select = styled.select`
  width: 50%;
  height: 50px;
  font-size: 20px;
  border: 0;
  outline: 0;
  appearance: none;
  border-bottom: 2px solid white;
  caret-color: gold;
  color: white;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
`;

export const Option = styled.option`
  background-color: black;
`;

export const SubmitBtn = styled.button`
  background-color: transparent;
  color: white;
  font-size: 20px;
  padding: 10px;
  border: 0;
  cursor: pointer;

  :hover {
    color: gold;
  }
`;
