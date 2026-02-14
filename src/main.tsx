import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StrictMode><App /></StrictMode>,
  },
]);

const root = document.getElementById("root");

createRoot(root!).render(
  <RouterProvider router={router} />,
)
