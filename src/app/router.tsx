import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageNotFound } from "shared/index";

import { UnderDevelopmentStub } from "../shared/ui/under-development-stub";

import "./index.css";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UnderDevelopmentStub />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
