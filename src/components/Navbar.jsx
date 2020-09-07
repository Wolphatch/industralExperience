import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { green } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Navbar = ({ sticky }) => {
  const classes = useStyles();
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
        <AppBar position="fixed" style={{ background: "white" }}>
          <Toolbar>
            <Typography
              variant="h5"
              style={{ color: "Green", fontStyle: "italic" }}
              className={classes.margin}
            >
              WhyIsDrought
            </Typography>

            <Button
              variant="none"
              size="large"
              style={{ fontSize: "20px" }}
              className={classes.margin}
              startIcon={<Home style={{ color: green[500] }} />}
            >
              <Link
                to={"/"}
                style={{
                  color: "Green",
                  textDecorationLine: "initial",
                  fontStyle: "italic",
                }}
              >
                Home
              </Link>
            </Button>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              style={{ color: "Green", fontSize: "20px", fontStyle: "italic" }}
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
              <MenuItem onClick={handleClose}>
                <Link
                  to={"/Intro"}
                  style={{
                    color: "Green",
                    textDecorationLine: "initial",
                    fontStyle: "italic",
                  }}
                >
                  What is drought?
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to={"/Cause"}
                  style={{
                    color: "Green",
                    textDecorationLine: "initial",
                    fontStyle: "italic",
                  }}
                >
                  Why drought happens?
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to={"/fact"}
                  style={{
                    color: "Green",
                    textDecorationLine: "initial",
                    fontStyle: "italic",
                  }}
                >
                  The climate in Australia?
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to={"/dataVis_evap"}
                  style={{
                    color: "limegreen",
                    textDecorationLine: "initial",
                    fontStyle: "italic",
                    fontSize: "15px",
                  }}
                >
                  Evaporation
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to={"/dataVis_Temp"}
                  style={{
                    color: "limegreen",
                    textDecorationLine: "initial",
                    fontStyle: "italic",
                    fontSize: "15px",
                  }}
                >
                  Temperature
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to={"/dataVis_Rainfall"}
                  style={{
                    color: "limegreen",
                    textDecorationLine: "initial",
                    fontStyle: "italic",
                    fontSize: "15px",
                  }}
                >
                  Rainfall
                </Link>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
