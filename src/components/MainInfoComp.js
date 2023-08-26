import { Avatar, Box, Grid, Typography } from "@mui/material";
import {React, useState, useEffect} from "react";
import Map from '../Assets/Map.png'
const width= "330px";
function MainInfoComp() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const loggedInUser = localStorage.getItem("selectedUserData");
    if (loggedInUser) {
      setLoggedInUser(JSON.parse(loggedInUser));
    }
  }, []);
  return (
   <Box sx={{}}>
   <Typography>Main Component</Typography>
   <Grid container  sx={{width:`calc(100% - ${width})`,ml:16}}>
    <Grid item md={5} sx={{borderRight:"1px solid #e5e5e5", pr:10}}>
      <Box sx={{}}>
        <Avatar sx={{width:200, height:200, ml:10}} src={loggedInUser.profilepicture} />
        <Typography sx={{fontSize:"1.2rem", color:"#555", fontWeight:"600", ml:11, my:2}}>{loggedInUser.name}</Typography>
      </Box>
      <Grid container md={12} sx={{mb:2}}>
        <Grid item md={6} sx={{textAlign:"right", fontSize:"1.2rem", color:"#999"}}>Username{" :"} </Grid>
        <Grid item md={6} sx={{textAlign:"left", pl:1, fontSize:"1.2rem", fontWeight:"600", color:"#555"}}>{" "}{loggedInUser.name}</Grid>
      </Grid>
      <Grid container md={12} sx={{mb:2}}>
        <Grid item md={6} sx={{textAlign:"right", fontSize:"1.2rem", color:"#999"}}>e-mail{" :"} </Grid>
        <Grid item md={6} sx={{textAlign:"left", pl:1, fontSize:"1.2rem", fontWeight:"600", color:"#555"}}>{" "}{loggedInUser.email}</Grid>
      </Grid>
      <Grid container md={12} sx={{mb:2}}>
        <Grid item md={6} sx={{textAlign:"right", fontSize:"1.2rem", color:"#999"}}>Phone{" :"} </Grid>
        <Grid item md={6} sx={{textAlign:"left", pl:1, fontSize:"1.2rem", fontWeight:"600", color:"#555"}}>{" "}{loggedInUser.phone}</Grid>
      </Grid>
      <Grid container md={12} sx={{mb:2}}>
        <Grid item md={6} sx={{textAlign:"right", fontSize:"1.2rem", color:"#999"}}>Website{" :"} </Grid>
        <Grid item md={6} sx={{textAlign:"left", pl:1, fontSize:"1.2rem", fontWeight:"600", color:"#555"}}>{" "}{loggedInUser.website}</Grid>
      </Grid>
    </Grid>
    <Grid item md={7} sx={{pl:6}}>
      <Box>
        <img src={Map} />
      </Box>
    </Grid>
   </Grid>
   </Box>
  );
}

export default MainInfoComp;
