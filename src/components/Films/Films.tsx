import Film from "./Film/Film";
import { Wrapper } from "./styles/styles";

interface IFilmsProps {
  filmsUrl: string[];
}

export default function Films({ filmsUrl }: IFilmsProps) {
  return (
    <Wrapper>
      {filmsUrl.map((url) => (
        <Film key={url} url={url} />
      ))}
    </Wrapper>
  );
}
