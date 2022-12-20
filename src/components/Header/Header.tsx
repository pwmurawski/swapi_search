import { useSearchParams } from "react-router-dom";
import SearchBar, { SEARCH_PARAM } from "../SearchBar/SearchBar";
import { Wrapper, Title } from "./styles/styles";

export default function Header() {
  const [searchParams] = useSearchParams();

  return (
    <Wrapper center={!searchParams.get(SEARCH_PARAM)}>
      <Title>SWAPI SEARCH</Title>
      <SearchBar />
    </Wrapper>
  );
}
