import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { Link, NavLink } from "react-router-dom";
import style from "./HeaderBar.module.css";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* <NavLink to={"/"} className={({isActive})=> isActive ? `${style.navigation} ${style.active}` : style.navigation}> */}
          <BottomNavigationAction href="/" label="Home" icon={<HomeIcon />} />
        {/* </NavLink> */}
          <BottomNavigationAction href="archive" label="Archive" icon={<RestoreIcon />} />
          <BottomNavigationAction href="favorite" label="Favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Box>
  );
}
