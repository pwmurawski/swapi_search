import fetchApi from "../../../api/fetchApi";
import useGetData from "../../../hooks/useGetData";
import { IPeople } from "../../../types/PeopleTypes";
import { IPlanets } from "../../../types/PlanetsTypes";
import { Wrapper, Homeworld, Name, Population } from "./styles/styles";

interface IStarWarsCharacterProps {
  characterData: IPeople;
}

export default function StarWarsCharacter({
  characterData: { name, homeworld, url },
}: IStarWarsCharacterProps) {
  const { data: homeworldData, loading } = useGetData(() =>
    fetchApi<IPlanets>(homeworld)
  );

  return (
    <Wrapper to={`/characters/${url.split("/")[5]}`}>
      <Name>{name}</Name>
      {loading ? (
        <div>loading ...</div>
      ) : (
        <>
          <Homeworld>{homeworldData?.name}</Homeworld>
          <Population>Population: {homeworldData?.population}</Population>
        </>
      )}
    </Wrapper>
  );
}
