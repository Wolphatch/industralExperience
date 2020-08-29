import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SideMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  ArrowForwardIos,
  Assignment,
  Home,
  Apps,
  InfoOutlined,
} from "@material-ui/icons";
import waterDrop from "../asset/waterDrop.jpg";

const useStyles = makeStyles((theme) => ({
  menuSlider: {
    width: 250,
    background: "white",
    height: "100rem",
  },
  avater: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  ListItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <Assignment />,
    listText: "Drought in Australia",
    listPath: "/fact",
  },
  {
    listIcon: <Apps />,
    listText: "Counter Mesure",
  },
  {
    listIcon: <InfoOutlined />,
    listText: "aboutUs",
    listPath: "/aboutUs",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSlider}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avater} src={waterDrop} alt="..." />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key} component={Link} to={listItem.listPath}>
            <ListItemIcon className={classes.ListItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.ListItem}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "white" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowForwardIos style={{ color: "green" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              WhyIsDrought
            </Typography>
            <SideMenuSlider
              anchor="left"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </SideMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
