import React from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
} from "@mui/material";
import AppBarComp from "../components/AppBarComp";
import MainInfoComp from "../components/MainInfoComp";
import { Link } from "react-router-dom";
import SideBarComp from "../components/SideBarComp";
import FooterComp from "../components/FooterComp";


function ProfilePage() {
  return (
    // <Box sx={{ display: "flex" }}>
    //   <Box>
    //     <AppBarComp />
    //   </Box>
    //   <SideBarComp />
    // </Box>
    <Box>
    <Grid container sx={{height:"100vh"}}>
      <Grid item md={2.5} alignItems="center">
        <SideBarComp />
      </Grid>
      <Grid item md={9.5}>
          <AppBarComp />
        <MainInfoComp />
        
      </Grid>
      <FooterComp />
    </Grid>
    </Box>
  );
}

export default ProfilePage;
