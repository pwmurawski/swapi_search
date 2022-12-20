import { ReactNode } from "react";
import { Wrapper, Container, Header, Main } from "./styles/styles";

interface ILayoutProps {
  header: ReactNode;
  main: ReactNode;
}

export default function Layout({ header, main }: ILayoutProps) {
  return (
    <Wrapper>
      <Container>
        <Header>{header}</Header>
        <Main>{main}</Main>
      </Container>
    </Wrapper>
  );
}
