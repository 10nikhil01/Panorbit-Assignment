import {
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  TextField,
  Typography,
  IconButton,
  Input,
  Divider,
} from "@mui/material";
import { React, useState, useEffect } from "react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from '@mui/icons-material/Send';

function FooterComp() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setOpen(false);
  };

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

  const [showUsers, setShowUsers] = useState(false);

  const handleButtonClick = () => {
    setShowUsers((prevShowUsers) => !prevShowUsers);
  };

  const handleSend = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "You" }]);
      setMessage("");
      console.log(messages);
      localStorage.setItem("Messages", JSON.stringify(messages));
    }
  };
  return (
    <Box sx={{ position: "fixed", bottom: "1rem", right: "10rem" }}>
      <Button
        onClick={handleButtonClick}
        startIcon={<ModeCommentOutlinedIcon style={{ fontSize: "1.8rem" }} />}
        endIcon={
          showUsers ? (
            <KeyboardArrowDownIcon sx={{ ml: "7rem" }} />
          ) : (
            <KeyboardArrowUpIcon sx={{ ml: "7rem" }} />
          )
        }
        variant="contained"
        size="large"
        sx={{
          boxShadow: "none",
          borderRadius: "8px 8px 0 0",
          textTransform: "none",
          fontSize: "1.1rem",
          fontWeight: "100",
        }}
      >
        Chats
      </Button>
      {showUsers && (
        <Box
          sx={{
            border: "1px solid #1976D2",
            height: "20rem",
            overflowY: "scroll",
          }}
        >
          <List dense>
            {users.map((user) => (
              <ListItemButton
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={user.id}
                onClick={() => handleUserClick(user)}
              >
                <Box sx={{ display: "flex" }}>
                  <Avatar
                    sx={{ width: 30, height: 30, mr: 1 }}
                    src={user.profilepicture}
                  />
                  <Typography sx={{ fontSize: ".9rem" }}>
                    {user.name}
                  </Typography>
                </Box>
                <Badge variant="dot" color="success" sx={{ mb: 1 }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      )}

      <Dialog
        open={open}
        BackdropProps={{ invisible: true }}
        onClose={handleClose}
        sx={{
          "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            position: "fixed",
            bottom: "1rem",
            right: "26rem",
            boxShadow: "none",
            borderRadius:"10px 10px 0 0"
          },
        }}
      >
        <DialogTitle sx={{bgcolor:"#1976D2",px:2, borderRadius:"10px 10px 0 0", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
         <Box sx={{display:"flex"}}> <Avatar sx={{width:25, height:25, mr:1}} src={selectedUser && selectedUser.profilepicture} />{" "}
          <Typography sx={{color:"#fff", fontSize:".9rem"}}> {selectedUser && selectedUser.name} </Typography>
          </Box>
          <Box>
            <IconButton sx={{p: "4px"}}>
          <KeyboardArrowDownIcon sx={{color:"#fff",}} />
          </IconButton>
          <IconButton aria-label="close"sx={{p:"4px"}} onClick={handleClose}>
            <CloseIcon sx={{color:"#fff"}} />
          </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ px:0, pb:0}}>
          <List sx={{border:"1px solid #1976d2"}}>
            {messages.map((msg, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={msg.sender}
                  secondary={msg.text}
                  secondaryTypographyProps={{ color: "textPrimary" }}
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{display:"flex", border:"1px solid #e5e5e5", p:0}}>
          <TextField variant="standard" size="small"
          InputProps={{
            disableUnderline: true
          }}
          sx={{pl:1}}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <IconButton onClick={handleSend} sx={{px:2}}>
            <SendIcon sx={{color:"#1976D2"}} />
          </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default FooterComp;
