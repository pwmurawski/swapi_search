import styled, { CSSObject } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
`;

const flexColumnStyles: CSSObject = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

export const Container = styled.section`
  ${flexColumnStyles};
  box-sizing: border-box;
  max-width: 1200px;
  padding: 0 50px 50px;
`;

export const Header = styled.header`
  ${flexColumnStyles};
`;

export const Main = styled.main`
  ${flexColumnStyles};
`;
