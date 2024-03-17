import * as React from "react";
import * as ReactDOM from "react-dom/client";
import MasterPage from "./pages/MasterPage";
import DetailsPage from "./pages/DetailsPage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterPage/>,
  },
  {
    path: "/:studentId",
    element: <DetailsPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

