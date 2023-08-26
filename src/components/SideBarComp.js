import { React } from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import "./SideBarComp.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 250;

const menuItems = [
  { id: 1, label: "Profile", to: "/profilePage" },
  { id: 2, label: "Post", to: "/postPage" },
  { id: 3, label: "Gallery", to: "/galleryPage" },
  { id: 4, label: "ToDo", to: "/todoPage" },
];

function SideBarComp() {
  const location = useLocation();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "linear-gradient(45deg , #603ac8 30%, #385bc8 80%)",
          borderRadius: "28px",
          height: "auto",
          py: 30,
          mt: 6,
          ml: 23,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {menuItems.map((menuItem, index) => (
        <List dense>
          <ListItem
            key={menuItem.id}
            component={NavLink}
            to={menuItem.to}
            sx={{ pl: 0, py: 0 }}
          >
            <ListItemButton sx={{ pl: 0, ml: 2, pt: 0, pb: 1 }}>
              <ListItemText
                primary={menuItem.label}
                className={
                  location.pathname === menuItem.to ? "active" : "notActive"
                }
                sx={{
                  px: 3,
                  "& .css-et1ao3-MuiTypography-root": {
                    fontSize: "1.1rem",
                  },
                }}
              />
              {location.pathname === menuItem.to ? (
                <ChevronRightIcon sx={{}} />
              ) : (
                ""
              )}
            </ListItemButton>
          </ListItem>
          {index !== menuItems.length - 1 && (
            <Divider variant="middle" sx={{ bgcolor: "#d5d4d7", mx: 5 }} />
          )}
        </List>
      ))}
    </Drawer>
  );
}

export default SideBarComp;
