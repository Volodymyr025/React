import { Outlet, useNavigation } from "react-router-dom";
import SimpleBottomNavigation from "./HeaderBar";
import CircularColor from './Loader'

const Root = () => {
  const navigation = useNavigation()
  return (
    <>
      <main className="mainContent">
        <SimpleBottomNavigation/>
        {navigation.state === 'loading' && <CircularColor/>}
        <Outlet/>
      </main>
    </>
  );
};

export default Root;
