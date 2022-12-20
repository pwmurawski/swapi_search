import fetchApi from "../../../api/fetchApi";
import useGetData from "../../../hooks/useGetData";
import { IFilms } from "../../../types/FilmsTypes";
import { Wrapper, OpeningCrawl, ReleaseDate, Title } from "./styles/styles";

interface IFilmProps {
  url: string;
}

export default function Film({ url }: IFilmProps) {
  const { data: filmData, loading } = useGetData(() => fetchApi<IFilms>(url));

  if (loading)
    return (
      <Wrapper>
        <div>loading ...</div>
      </Wrapper>
    );
  if (!filmData) return null;
  return (
    <Wrapper>
      <Title>{filmData.title}</Title>
      <ReleaseDate>{filmData.release_date}</ReleaseDate>
      <OpeningCrawl>{filmData.opening_crawl.slice(0, 130)}</OpeningCrawl>
    </Wrapper>
  );
}
