import { Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/about" element={<PageAbout />} />
    </Routes>
  );
};
