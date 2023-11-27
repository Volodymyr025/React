import "./App.css";
import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import Archive from "./router/Archive";
import Root from "./component/Root";
import Favorite from "./router/Favorite";
import Home from "./router/Home";
import ErrorPage from "./router/Error";
import CreateNewDessert, { action as addData } from "./UI/CreateNewDessert";
import { loader } from "./component/FetchHeandler";



const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: () => loader("list") },
      {
        path: "favorite",
        element: <Favorite />,
        loader: () => loader("favorite"),
      },
      {
        path: "archive",
        element: <Archive />,
        loader: () => loader("archive"),
      },
      {
        path: "form",
        element: <CreateNewDessert title={"Add item"} method={"POST"} />,
        action: (e)=>addData('',e.request,e.params),
      },
      {
        path: "list/:itemId",
        element: <CreateNewDessert title={"Edit item"} method={"PATCH"} />,
        action: (e)=>addData('list',e.request,e.params),
      },
      {
        path: "archive/:itemId",
        element: <CreateNewDessert title={"Edit item"} method={"PATCH"} />,
        action: (e)=>addData('archive',e.request,e.params),
      },
      {
        path: "favorite/:itemId",
        element: <CreateNewDessert title={"Edit item"} method={"PATCH"} />,
        action: (e)=>addData('favorite',e.request,e.params),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
