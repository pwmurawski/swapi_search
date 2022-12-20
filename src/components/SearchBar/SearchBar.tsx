import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input, Select, SubmitBtn, Wrapper } from "./styles/styles";

export const SEARCH_PARAM = "term";
export const WHERE_PARAM = "where";

export default function SearchBar() {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const [formValue, setFormValue] = useState({
    term: searchParams.get(SEARCH_PARAM) ?? "",
    where: searchParams.get(WHERE_PARAM) ?? "",
  });

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    nav({
      pathname: "/search",
      search: `?${SEARCH_PARAM}=${formValue.term}&${WHERE_PARAM}=${formValue.where}`,
    });
  };

  useEffect(() => {
    if (!formValue.term) nav("/");
  }, [formValue.term]);

  return (
    <Wrapper onSubmit={onSubmitHandler}>
      <Select
        value={formValue.where}
        onChange={(e) => setFormValue({ ...formValue, where: e.target.value })}
      >
        <option value="people">people</option>
        <option value="planets">planets</option>
      </Select>
      <Input
        type="text"
        value={formValue.term}
        placeholder="Search star wars characters..."
        onChange={(e) => setFormValue({ ...formValue, term: e.target.value })}
      />
      <SubmitBtn type="submit">Szukaj</SubmitBtn>
    </Wrapper>
  );
}
