import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { AppRouter } from './router.tsx';
import { store } from './store/store.ts';

import './index.css';

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
