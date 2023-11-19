import { Outlet } from "react-router-dom";
import SimpleBottomNavigation from "./HeaderBar";

const Root = () => {
  return (
    <>
      <main className="mainContent">
        <SimpleBottomNavigation/>
        <Outlet/>
      </main>
    </>
  );
};

export default Root;
