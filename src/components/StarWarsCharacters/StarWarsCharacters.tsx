import { IPeople } from "../../types/PeopleTypes";
import StarWarsCharacter from "./StarWarsCharacter/StarWarsCharacter";
import { Wrapper } from "./styles/styles";

interface IStarWarsCharactersProps {
  charactersData: IPeople[];
}

export default function StarWarsCharacters({
  charactersData,
}: IStarWarsCharactersProps) {
  return (
    <Wrapper>
      {charactersData.map((character) => (
        <StarWarsCharacter key={character.name} characterData={character} />
      ))}
    </Wrapper>
  );
}
