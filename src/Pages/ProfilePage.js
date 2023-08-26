import { React } from "react";
import { Box, Grid } from "@mui/material";
import AppBarComp from "../components/AppBarComp";
import MainInfoComp from "../components/MainInfoComp";
import SideBarComp from "../components/SideBarComp";
import FooterComp from "../components/FooterComp";

function ProfilePage() {
  return (
    <Box>
      <Grid container sx={{ height: "100vh" }}>
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
