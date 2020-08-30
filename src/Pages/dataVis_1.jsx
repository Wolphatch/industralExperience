import React from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//assest
import Temp_Vis from "../asset/Temperature_Visulization.png";

import TagTool from '../components/TagTool';

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

function Intro() {
  const classes = whatever();
  return (
    <>
      <Navbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Introduction to drought
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Some background knowledge of drought in Australia
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}

        <div>
          <img
            src={Temp_Vis}
            alt="..."
            style={{
              marginTop: "100px",
              marginLeft: "10%",
              width: "80%",
              height: "100%",
            }}
          />
        </div>

        {/* card container */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* grid container */}
          <Grid container spacing={4}></Grid>
        </Container>
      </main>
      <TagTool></TagTool> 
      <Footer />
    </>
  );
}

export default Intro;
