import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import SignUpPage from "../pages/SignUp";
import NotFoundPage from "../pages/NotFound";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};
