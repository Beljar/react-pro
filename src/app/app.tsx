import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppRouter } from "./router.tsx";

import "./index.css";

const App = () => {
  return (
    <StrictMode>
      <AppRouter />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
