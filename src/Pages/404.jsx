import React from "react";
import error from "../asset/error.jpg";
import Navbar from "../components/Navbar";
// import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const whatever = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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

const NotFoundPage = () => {
  const classes = whatever();

  const [backEnable, setBackEnable] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const changeBackEnable = () => {
    setBackEnable(() => !backEnable);
  };

  const changeDisabled = () => {
    setDisabled(() => !disabled);
    setTimeout(function () {
      changeItBack();
    }, 3000);
  };

  const changeItBack = () => {
    setBackEnable(() => !backEnable);
    console.log("You can leave");
  };

  return (
    <>
      <Navbar />
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            404 Not Found
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            We lost you
          </Typography>
          <Typography align="center">
            <img src={error} alt="..." />
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                {backEnable ? (
                  <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to="/"
                  >
                    Here we go
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="primary"
                    disabled={disabled}
                    onClick={(changeBackEnable, changeDisabled)}
                  >
                    {disabled ? "Finding the way back..." : "Bring me back"}
                  </Button>
                )}
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFoundPage;
