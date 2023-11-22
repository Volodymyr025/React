import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Archive from "./router/Archive";
import Root from "./component/Root";
import Favorite,{loader as loadFavoriteData} from "./router/Favorite";
import Home, { loader as loadData } from "./router/Home";
import ErrorPage from "./router/Error";
import EditPage from "./router/EditPage";
import CreateNewDessert, {action as addData} from "./UI/CreateNewDessert";
import { addItem, loader,editItem } from "./component/FetchHeandler";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: ()=>loader('list'), },
      { path: "favorite", element: <Favorite />,loader:()=>loader('favorite')},
      { path: "archive", element: <Archive />, loader:()=>loader('archive')},
      {
        path: "/:itemId",
        children: [{ index: true, element: <EditPage />, action:({request})=>{editItem(request,)}}],
      },
      { path: "form", element: <CreateNewDessert title={"Add item"}/>, action:addItem},
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
