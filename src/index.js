import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

function AppWrapper() {
  return <App />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<AppWrapper />);
