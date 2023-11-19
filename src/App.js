import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Archive from "./router/Archive";
import Root from "./component/Root";
import Favorite from "./router/Favorite";
import Home from "./router/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "favorite", element: <Favorite /> },
      { path: "archive", element: <Archive /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
