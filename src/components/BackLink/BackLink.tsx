import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles/styles";

export default function BackLink() {
  const nav = useNavigate();
  return <Wrapper onClick={() => nav(-1)}>back</Wrapper>;
}
