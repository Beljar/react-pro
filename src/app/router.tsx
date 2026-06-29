import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageNotFound } from "shared/index";

import { TaskList } from "features/taskList/ui/TaskList";

import { UnderDevelopmentStub } from "../shared/ui/UnderDevelopmentStub";

import "./index.css";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TaskList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
