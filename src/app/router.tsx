import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { PageNotFound } from "shared/index";

import { TaskPage } from "pages/tasks";

import "./index.css";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
