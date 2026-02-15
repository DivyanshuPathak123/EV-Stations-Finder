import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";

import router from "./routes";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");

createRoot(root!).render(<RouterProvider router={router} />);
