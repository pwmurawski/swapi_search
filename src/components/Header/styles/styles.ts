import styled from "styled-components";

export const Wrapper = styled.section<{ center?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 300ms;

  transform: ${({ center }) => (center ? "translateY(30vh)" : "none")};
`;

export const Title = styled.h1`
  font-size: 50px;
  color: gold;
  text-align: center;
`;
