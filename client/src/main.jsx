import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import AppContextProvider from "./context/AppContextProvider.context.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AppContextProvider>,
);
