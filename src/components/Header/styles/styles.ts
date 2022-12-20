import styled from "styled-components";

export const Wrapper = styled.section<{ center?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 300ms;
  z-index: 1;

  transform: ${({ center }) => (center ? "translateY(25vh)" : "none")};
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-top: 0;
  color: gold;
  text-align: center;
`;
