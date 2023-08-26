import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  ListItemButton,
} from "@mui/material";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Users() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(`https://panorbit.in/api/users.json`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const Navigate = useNavigate();
  function handleUsersClick(user) {
    console.log(user);
    localStorage.setItem('selectedUserData', JSON.stringify(user));
    Navigate("./profilePage");
  }

  return (
    <Card sx={{ m: "8rem 25rem", bgcolor: "#fff", borderRadius: "30px" }}>
      <CardHeader
        sx={{
          bgcolor: "#f6f6f6",
          fontWeight: "600",
          textAlign: "center",
          px: 28,
          "& .css-1qvr50w-MuiTypography-root": {
            fontWeight: "600",
            color: "#444",
            fontSize: "1.3rem",
            py: 3,
          },
        }}
        title="Select an account"
      />
      <CardContent
        sx={{ maxHeight: "450px", overflowY: "scroll", pt: 0, mb: 3 }}
      >
        {users.map((user, i) => (
          <List dense sx={{ px: 2 }}>
            <ListItem
              key={i}
              onClick={() => handleUsersClick(user)}
              alignItems="flex-start"
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar sx={{ mt: 0, mb: 1 }}>
                  <Avatar alt={user.name} src={user.profilepicture} />
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  sx={{
                    "& .css-et1ao3-MuiTypography-root": { fontSize: "1.1rem" },
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        ))}
      </CardContent>
    </Card>
  );
}

export default Users;
