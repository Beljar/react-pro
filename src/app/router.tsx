import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PageNotFound } from 'shared/ui';
import { ConfirmDialogProvider } from 'shared/ui/ConfirmDialog';
import { PageLayout } from 'shared/ui/PageLayout';

import { LoginPage } from 'pages/login';
import { PortalShowcase } from 'pages/portal-showcase';
import { ProfilePage } from 'pages/profile';
import { PublicPage } from 'pages/public';
import { RefExamplesPage } from 'pages/refExamples/ui';
import { SignupPage } from 'pages/signup/ui';
import { SubscribePage } from 'pages/subscribe/ui';
import { TaskPage } from 'pages/tasks';

import { NavigationMenu } from 'widgets/navigationMenu';

import { AuthContextProvider } from 'features/authRouting/AuthContextProvider';
import { ProtectedRoute } from 'features/authRouting/ProtectedRoute';

import './index.css';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ConfirmDialogProvider>
        <AuthContextProvider>
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
              path="/login"
              element={
                <PageLayout Header={<NavigationMenu />}>
                  <LoginPage />
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
            <Route
              path="/public"
              element={
                <PageLayout Header={<NavigationMenu />}>
                  <PublicPage />
                </PageLayout>
              }
            />
            <Route
              path="/portal-showcase"
              element={
                <PageLayout Header={<NavigationMenu />}>
                  <PortalShowcase />
                </PageLayout>
              }
            />
            <Route element={<ProtectedRoute />}>
              <Route
                path="/profile"
                element={
                  <PageLayout Header={<NavigationMenu />}>
                    <ProfilePage />
                  </PageLayout>
                }
              />
            </Route>

            <Route path="/" element={<Navigate to="/profile" replace />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthContextProvider>
      </ConfirmDialogProvider>
    </BrowserRouter>
  );
};
