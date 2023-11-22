import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Archive from "./router/Archive";
import Root from "./component/Root";
import Favorite from "./router/Favorite";
import Home, { loader as loadData } from "./router/Home";
import ErrorPage from "./router/Error";
import EditPage from "./router/EditPage";
import CreateNewDessert from "./UI/CreateNewDessert";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: loadData, },
      { path: "favorite", element: <Favorite /> },
      { path: "archive", element: <Archive /> },
      {
        path: "/:itemId",
        children: [{ index: true, element: <EditPage /> }],
      },
      { path: "form", element: <CreateNewDessert title={"Add item"}/>,action:(params,request)=>{console.log(params)}},
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
