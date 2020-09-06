import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import temp from "../asset/3.gif";
import Typed from "react-typed";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ExploreIcon from "@material-ui/icons/Explore";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import FlipPage from "react-flip-page";

const useStyles = makeStyles((theme) => ({
  avater: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  titleTemp: {
    color: "#e8ffe8",
    marginTop: "200px",
  },
  title: {
    color: "#e8ffe8",
  },
  subtitle: {
    color: "#10316b",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100wm",
    textAlign: "center",
    zIndex: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(30, 0, 6),
  },
  IconButton: {
    marginTop: "200px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      {/* <Grid container justify="center">
          <Avatar className={classes.avater} src={temp} alt="..." />
        </Grid> */}
      <FlipPage
        width={window.innerWidth}
        height={600}
        pageBackground="#17b978"
        flipOnTouch="true"
        disableSwipe="true"
      >
        {/* page 1*/}
        <div>
          <Typography
            className={classes.titleTemp}
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            <Box fontWeight="fontWeightBold" m={1}>
              Do you know:
            </Box>
          </Typography>
          <Typography
            className={classes.subtitle}
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
          >
            <Typed
              strings={[
                "Why is drought?",
                "What are the effects?",
                "What can we do?",
              ]}
              typespeed={40}
              backSpeed={60}
              loop
            />
          </Typography>
          <div className={classes.IconButton}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <IconButton aria-label="expand">
                  <ExpandMoreIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </div>

        {/* page 2*/}
        <div>
          <Typography
            className={classes.title}
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            <Box fontWeight="fontWeightBold" m={1}>
              Fact of drought in Australia
            </Box>
          </Typography>
          <Typography
            className={classes.subtitle}
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
          >
            <p>Australia has a long history of drought.</p>
            <p> Drought is considered as a feature of Australia.</p>
            <p>
              Australia continent itself is the driest inhabited continent on
              Earth.
            </p>
            <p>
              Australias has the most variable rainfall and stream-flow on
              Earth.
            </p>

            <p>
              Hot extremes are becoming more frequent and intense (IPCC2014).
            </p>
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ExploreIcon />}
                  component={Link}
                  to="/fact"
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </FlipPage>
    </div>
  );
};

export default Header;
