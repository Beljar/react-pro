import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PageNotFound } from 'shared/index';

import { SignupPage } from 'pages/signup/ui';
import { TaskPage } from 'pages/tasks';

import './index.css';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
