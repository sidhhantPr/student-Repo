import { createRoot } from "react-dom/client";
import router from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
