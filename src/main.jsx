import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll } from "motion/react";
import "./index.css";
import App from "./App.jsx";
import Scroll from "./scroll.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
