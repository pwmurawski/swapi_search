import { Route, Routes } from "react-router-dom";
import BackLink from "./components/BackLink/BackLink";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Character from "./pages/Character/Character";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Layout
      header={
        <Routes>
          <Route path="*" element={<Header />} />
          <Route path="/characters/:id" element={<BackLink />} />
        </Routes>
      }
      main={
        <Routes>
          <Route index element={null} />
          <Route path="/search" element={<Search />} />
          <Route path="/characters/:id" element={<Character />} />
        </Routes>
      }
    />
  );
}

export default App;
