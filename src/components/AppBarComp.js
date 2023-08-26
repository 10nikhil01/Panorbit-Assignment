import { React, useState, useEffect } from "react";
import { AppBar, Avatar, Button, Chip, Menu, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 680;

function AppBarComp() {
  
  const location = useLocation();
  const [selectedUserData, setSelectedUserData] = useState({});

  useEffect(() => {
    const storedSelectedUserData = localStorage.getItem("selectedUserData");
    if (storedSelectedUserData) {
      setSelectedUserData(JSON.parse(storedSelectedUserData));
    }
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("selectedUserData");

    Navigate("/");
  };

  const getHeadingFromPath = (path) => {
    switch (path) {
      case "/profilePage":
        return "Profile";
      case "/postPage":
        return "Posts";
      case "/galleryPage":
        return "Gallery";
      case "/todoPage":
        return "TODo";
      default:
        return "App";
    }
  };

  const currentHeading = getHeadingFromPath(location.pathname);

  return (
    <AppBar
      sx={{
        bgcolor: "transparent",
        width: `calc(100% - ${drawerWidth}px)`,
        mt: 7,
        mr: 25,
        boxShadow: "none",
        borderBottom: "1px solid #999",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        pb: 2,
      }}
    >
      <Typography
        variant="h6"
        noWrap
        sx={{ color: "#555", fontSize: "1.3rem", fontWeight: "700" }}
      >
        {currentHeading}
      </Typography>
      <Button
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<Avatar src={selectedUserData.profilepicture} />}
        sx={{ color: "#555", fontSize: "1rem", textTransform: "none" }}
      >
        {selectedUserData.name}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
            borderRadius: "20px",
          },
          "& .css-6hp17o-MuiList-root-MuiMenu-list": {
            m: 4,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          },
        }}
      >
        <Avatar
          sx={{ width: 80, height: 80, mb: 2 }}
          src={selectedUserData.profilepicture}
        />
        <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>
          {selectedUserData.name}
        </Typography>
        <Typography sx={{ fontSize: ".9rem", mb: 2, color: "#999" }}>
          {selectedUserData.email}
        </Typography>
        <Chip
          color="error"
          sx={{}}
          size="medium"
          label="Sign out"
          onClick={handleSignOut}
        />
      </Menu>
    </AppBar>
  );
}

export default AppBarComp;
