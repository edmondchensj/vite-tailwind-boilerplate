import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/loadable";
import { ErrorPage } from "../pages/error/loadable";
import { TailwindDemoPage } from "../pages/tailwind-demo/loadable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },  
  {
    path: "/tailwind-demo",
    element: <TailwindDemoPage />,
    errorElement: <ErrorPage />,
  },
]);
