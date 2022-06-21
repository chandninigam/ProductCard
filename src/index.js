import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToggleProvider } from "./Context/ToggleContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </StrictMode>
);
