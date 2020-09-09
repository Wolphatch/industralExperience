import React from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Viz from "./viz";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TagTool from "../components/TagTool";

//assest
import waterIntro from "../asset/waterIntro.png";

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
  titleTemp: {
    color: "#2f89fc",
    marginLeft: theme.spacing(10),
  },
  title: {
    color: "#e8ffe8",
    marginLeft: theme.spacing(10),
  },
  subtitle: {
    color: "#10316b",
    marginBottom: "3rem",
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(30),
  },
  subtitle2: {
    color: "#10316b",
    marginBottom: "3rem",
    marginLeft: theme.spacing(10),
  },
  iframe: {
    margin: theme.spacing(20, 0, 0, 20),
  },
}));

const Intro = () => {
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
              Water evaporation in Australia
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Do you have any idea about water evaporation in Australia?
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}

        {/* <div>
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
        </div> */}

        <div
          style={{
            marginTop: "100px",
            marginLeft: "10%",
            width: "80%",
            height: "100%",
          }}
        >
          <Slide easing="ease" autoplay={false}>
            <div className="each-slide">
              <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={6}>
                  {/* page 1*/}
                  <Typography
                    className={classes.titleTemp}
                    component="h1"
                    variant="h2"
                    align="left"
                    gutterBottom
                  >
                    <Box fontWeight="fontWeightBold" m={1}>
                      Here we have:
                    </Box>
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    variant="h4"
                    align="left"
                    color="textSecondary"
                    paragraph
                  >
                    <p>A video introducing the value of water.</p>
                    <p>
                      An interactive visualization shows the water consumption
                      in Australia.
                    </p>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <img
                    src={waterIntro}
                    alt="..."
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="each-slide">
              <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={4}>
                  <Typography
                    className={classes.titleTemp}
                    component="h1"
                    variant="h2"
                    align="left"
                    gutterBottom
                  >
                    <Box fontWeight="fontWeightBold" m={1}>
                      Do you know ?
                    </Box>
                  </Typography>
                  <Typography
                    className={classes.subtitle2}
                    variant="h4"
                    align="left"
                    color="textSecondary"
                    paragraph
                  >
                    <p>
                      Fresh water is one of the most valuable resources to
                      human. Drought may dramatically influence the water
                      supply. People and properties in drought areas may be
                      threatened by the shortage of water supply. Play the video
                      on the right, which tells you the value of water. Please
                      save the water in your daily life so that people who are
                      affected by drought can be saved.
                    </p>
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <iframe
                    className={classes.iframe}
                    width="640"
                    height="480"
                    src="https://www.youtube.com/embed/SkAhB-8CtZg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Grid>
              </Grid>
            </div>
            <div className="each-slide">
              <Viz Url="https://public.tableau.com/views/Water_15993858642510/Water_01_V1?:language=zh-Hans&:display_count=y&publish=yes&:origin=viz_share_link" />
            </div>
          </Slide>
        </div>

        {/* card container */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* grid container */}
          <Grid container spacing={4}></Grid>
        </Container>
      </main>
      <TagTool></TagTool>
      <Footer></Footer>
    </>
  );
};
export default Intro;
