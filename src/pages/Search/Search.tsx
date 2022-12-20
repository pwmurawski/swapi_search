import { useSearchParams } from "react-router-dom";
import { WhereType } from "../../api/getSearch";
import Loading from "../../components/Loading/Loading";
import NoResultsFound from "../../components/NoResultsFound/NoResultsFound";
import {
  SEARCH_PARAM,
  WHERE_PARAM,
} from "../../components/SearchBar/SearchBar";
import StarWarsCharacters from "../../components/StarWarsCharacters/StarWarsCharacters";
import useSearch from "../../hooks/useSearch";

export default function Search() {
  const [searchParams] = useSearchParams();
  const { charactersData, loading } = useSearch(
    searchParams.get(SEARCH_PARAM),
    searchParams.get(WHERE_PARAM) as WhereType
  );

  if (loading) return <Loading />;
  if (charactersData.length === 0) return <NoResultsFound />;
  return <StarWarsCharacters charactersData={charactersData} />;
}
