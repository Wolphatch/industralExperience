import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import temp from "../asset/3.gif";
import Typed from "react-typed";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ExploreIcon from "@material-ui/icons/Explore";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  avater: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
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
    padding: theme.spacing(40, 0, 6),
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
      <Container maxWidth="sm">
        <Grid container justify="center">
          <Avatar className={classes.avater} src={temp} alt="..." />
        </Grid>
        <Typography
          className={classes.title}
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
      </Container>
    </div>
  );
};

export default Header;
