import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { CaretRight } from "phosphor-react";
//  imgPerfil from "https://cdn.pixabay.com/photo/2016/12/21/00/36/woman-1921883_960_720.jpg";

export default function SideBar() {
  const [state, setState] = React.useState(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          key="Home"
          disablePadding
          sx={{ height: 112, margin: "auto" }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2016/12/21/00/36/woman-1921883_960_720.jpg"
            sx={{ width: 80, height: 80, margin: "auto" }}
          />
        </ListItem>
        <ListItem key="Home" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link className="linkSidebar" to="/dashboard">
              <ListItemText primary="Dashboard" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Perfil" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link className="linkSidebar" to="/perfil">
              <ListItemText primary="Perfil" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Clientes" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link className="linkSidebar" to="/clientes">
              <ListItemText primary="Clientes" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {
        <>
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon sx={{ fontSize: 40, color: "#171717" }} />
            <CaretRight size={32} color="#171717" weight="bold" />
          </Button>

          <SwipeableDrawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </>
      }
    </div>
  );
}
