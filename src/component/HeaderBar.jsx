import * as React from "react";
import Box from "@mui/material/Box";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink, useLocation } from "react-router-dom";
import style from "./HeaderBar.module.css";

export default function SimpleBottomNavigation() {
  
  return (
    <Box sx={{ width: 500, display: "flex" }}>
      <NavLink to={"/"} className={({ isActive }) => isActive ? `${style.navigation} ${style.active}` : style.navigation}>
        <HomeIcon />
        <section>Home</section>
      </NavLink>
      <NavLink to={"archive"} className={({ isActive }) => isActive ? `${style.navigation} ${style.active}` : style.navigation}>
        <RestoreIcon />
        <section>Archive</section>
      </NavLink>
      <NavLink to={"favorite"} className={({ isActive }) => isActive ? `${style.navigation} ${style.active}` : style.navigation}>
        <FavoriteIcon />
        <section>Favorite</section>
      </NavLink>
    </Box>
  );
}
