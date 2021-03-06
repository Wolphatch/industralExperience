import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { green } from "@material-ui/core/colors";
import BackToTop from "react-back-to-top-button";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import BubbleChartRoundedIcon from "@material-ui/icons/BubbleChartRounded";
import ListItemIcon from "@material-ui/core/ListItemIcon";

//assest
import logo from "../asset/homePage/Logo.png";

//import DataVis from "../Pages/dataVis_evap";

const whatever = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  menuItem1: {
    color: "#000000",
    textDecorationLine: "initial",
  },
  menuItem2: {
    color: "limegreen",
    textDecorationLine: "initial",
  },
  AppBar: {
    background: "#FFFFFFCC",
  },
  homeIcon: {
    color: green[500],
  },
  mainButton: {
    marginTop: theme.spacing(0.85),
    marginLeft: theme.spacing(3),
    color: "#000000",
    fontSize: "20px",
  },
}));

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
    linkText: "Damage",
    linkTo: "/damage",
  },
  {
    linkText: "Countermeasure",
    linkTo: "/contermeasure",
  },
  {
    linkText: "Water",
    linkTo: "/dataVis_WaterConsumption",
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
    linkText: "Quizzes",
    linkTo: "/quizzes",
  },
  {
    linkText: "",
    linkTo: "",
  },
];

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     "&:focus": {
//       backgroundColor: theme.palette.primary.main,
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

const mapMenuItems = (menuGroup) => {
  const classes = whatever();
  let menuUI = [];

  menuGroup.map((item, key) => {
    menuUI.push(
      <MenuItem>
        <ListItemIcon>
          <BubbleChartRoundedIcon fontSize="small" />
          <Link className={classes.menuItem1} to={item.linkTo}>
            {item.linkText}
          </Link>
        </ListItemIcon>
      </MenuItem>
    );
    return null;
  });
  return menuUI;
};

const Navbar = () => {
  const classes = whatever();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEll, setAnchorEll] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEll(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEll(null);
  };
  const [anchorElll, setAnchorElll] = React.useState(null);

  const handleClick3 = (event) => {
    setAnchorElll(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorElll(null);
  };
  const [anchorEllll, setAnchorEllll] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEllll(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEllll(null);
  };
  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  // const background = useRef(null);
  // const Visulization = useRef(null);

  const menuList = [
    {
      startIndex: 0,
      endIndex: 4,
      menuName: "Drought Background",
      menuId: "menu_1",
      open: handleClick,
      close: handleClose,
      anchor: anchorEl,
    },
    {
      startIndex: 6,
      endIndex: 9,
      menuName: "Visualization",
      menuId: "menu_3",
      open: handleClick2,
      close: handleClose2,
      anchor: anchorEll,
    },
    {
      startIndex: 4,
      endIndex: 6,
      menuName: "How To Prevent Drought",
      menuId: "menu_2",
      open: handleClick3,
      close: handleClose3,
      anchor: anchorElll,
    },
    {
      startIndex: 9,
      endIndex: 10,
      menuName: "Quizzes",
      menuId: "menu_4",
      open: handleClick4,
      close: handleClose4,
      anchor: anchorEllll,
    },
  ];

  const mapMenuList = (menuGroup) => {
    let menuUI = [];

    menuGroup.map((group, key) => {
      menuUI.push(
        <>
          <Button
            className={classes.mainButton}
            aria-controls={group.menuId}
            aria-haspopup="true"
            onClick={group.open}
          >
            {group.menuName}
          </Button>
          <StyledMenu
            id={group.menuId}
            anchorEl={group.anchor}
            keepMounted
            open={Boolean(group.anchor)}
            onClose={group.close}
          >
            {mapMenuItems(menuItems.slice(group.startIndex, group.endIndex))}
          </StyledMenu>
        </>
      );
      return null;
    });
    return menuUI;
  };

  return (
    <>
      <Box component="nav">
        <AppBar className={classes.AppBar} position="fixed">
          <Toolbar id="back-to-top-anchor">
            {/* <Avatar variant="square" alt="logo" src={logo} /> */}

            <Link
              style={{
                width: "225px",
                height: "50px",
              }}
              to={"/"}
            >
              {" "}
              <img
                src={logo}
                alt="..."
                style={{
                  width: "210px",
                  height: "50px",
                }}
              />
            </Link>

            {/* <Button style={{ backgroundImage: `url(${logo})` }}>
              <Link className={classes.menuItem1} to={"/"}></Link>
            </Button> */}

            {/* <Button
              variant="none"
              size="large"
              style={{ fontSize: "20px" }}
              className={classes.margin}
              startIcon={<Home className={classes.homeIcon} />}
            >
              <Link className={classes.menuItem1} to={"/"}>
                Home
              </Link> */}
            {/* <Button
              className={classes.mainButton}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Background Information
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {mapMenuItems(menuItems)}
            </Menu> */}

            {mapMenuList(menuList)}
          </Toolbar>
        </AppBar>
      </Box>
      <BackToTop showAt={100} speed={1500} easing="easeInOutQuint">
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Navbar;
