import { useParams } from "react-router-dom";
import getPeople from "../../api/getPeople";
import Films from "../../components/Films/Films";
import Loading from "../../components/Loading/Loading";
import useGetData from "../../hooks/useGetData";

export default function Character() {
  const { id } = useParams<{ id: string }>();
  const { data: characterData, loading } = useGetData(() => getPeople(id));

  if (loading) return <Loading />;
  if (!characterData?.films) return null;
  return <Films filmsUrl={characterData.films} />;
}
