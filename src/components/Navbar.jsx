import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { green } from "@material-ui/core/colors";

//import DataVis from "../Pages/dataVis_evap";

const whatever = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  menuItem1: {
    color: "Green",
    textDecorationLine: "initial",
  },
  menuItem2: {
    color: "limegreen",
    textDecorationLine: "initial",
  },
  AppBar: {
    background: "white",
  },
  homeIcon: {
    color: green[500],
  },
  mainButton: {
    color: "Green",
    fontSize: "20px",
  },
}));

const testLink = {
  path: "/dataVis_evap",
  title: "Water evaporation in Australia",
  subTitle: "Do you have any idea about water evaporation in Australia?",
};

const menuItems = [
  {
    linkText: "What is drought?",
    linkTo: "/Intro",
  },
  {
    linkText: "Why drought happens?",
    linkTo: "/Cause",
  },
  {
    linkText: "History of drought",
    linkTo: "/Chronology",
  },
  {
    linkText: "Evaporation",
    linkTo: "/dataVis_evap",
  },
  {
    linkText: "Temperature",
    linkTo: "/dataVis_Temp",
  },
  {
    linkText: "Rainfall",
    linkTo: "/dataVis_Rainfall",
  },
  {
    linkText: "Water",
    linkTo: "/dataVis_WaterConsumption",
  },
];

const mapMenu = (menuGroup) => {
  const classes = whatever();
  let menuUI = [];

  menuGroup.map((item, key) => {
    menuUI.push(
      <MenuItem>
        <Link className={classes.menuItem1} to={item.linkTo}>
          {item.linkText}
        </Link>
      </MenuItem>
    );
    return null;
  });
  return menuUI;
};

const Navbar = ({ sticky }) => {
  const classes = whatever();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box component="nav">
        <AppBar className={classes.AppBar} position="fixed">
          <Toolbar>
            <Typography
              variant="h5"
              style={{ color: "Green" }}
              className={classes.margin}
            >
              WhyIsDrought
            </Typography>

            <Button
              variant="none"
              size="large"
              style={{ fontSize: "20px" }}
              className={classes.margin}
              startIcon={<Home className={classes.homeIcon} />}
            >
              <Link className={classes.menuItem1} to={"/"}>
                Home
              </Link>
            </Button>
            <Button
              className={classes.mainButton}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Do you know?
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {mapMenu(menuItems)}
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
