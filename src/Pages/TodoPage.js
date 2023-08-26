import React, { useState } from "react";
import {
  Box,
  Grid,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBarComp from "../components/AppBarComp";
import OtherPagesInfo from "../components/OtherPagesInfo";
import SideBarComp from "../components/SideBarComp";
import FooterComp from "../components/FooterComp";


function TodoPage() {

 
  return (
    <Box>
    <Grid container sx={{height:"100vh"}}>
      <Grid item md={2.5} alignItems="center">
        <SideBarComp />
      </Grid>
      <Grid item md={9.5}>
          <AppBarComp />
        <OtherPagesInfo />        
      </Grid>
      <FooterComp />
    </Grid>
    </Box>
  );
}

export default TodoPage;
