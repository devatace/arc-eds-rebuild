import './styles/all.css'
import './styles/index.css'
import './styles/variables.css'
import './styles/fonts.css'

import { Toaster } from "sonner";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";

import AppRoutes from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
    <Toaster position="bottom-center" />
  </BrowserRouter>
);