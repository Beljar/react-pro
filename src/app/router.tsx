import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PageNotFound } from 'shared/ui';
import { PageLayout } from 'shared/ui/PageLayout';

import { RefExamplesPage } from 'pages/refExamples/ui';
import { SignupPage } from 'pages/signup/ui';
import { SubscribePage } from 'pages/subscribe/ui';
import { TaskPage } from 'pages/tasks';

import { NavigationMenu } from 'widgets/navigationMenu';

import './index.css';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/tasks"
          element={
            <PageLayout Header={<NavigationMenu />}>
              <TaskPage />
            </PageLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <PageLayout Header={<NavigationMenu />}>
              <SignupPage />
            </PageLayout>
          }
        />
        <Route
          path="/subscribe"
          element={
            <PageLayout Header={<NavigationMenu />}>
              <SubscribePage />
            </PageLayout>
          }
        />
        <Route
          path="/ref-examples"
          element={
            <PageLayout Header={<NavigationMenu />}>
              <RefExamplesPage />
            </PageLayout>
          }
        />
        <Route path="/" element={<Navigate to="/ref-examples" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
