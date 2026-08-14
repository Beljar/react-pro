// Simulated pages
const pages = {
  home: () => import('./pages/home'),
  about: () => import('./pages/about'),
};

export const routes = pages;
