import React, { Component } from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import tableau from "tableau-api";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TagTool from "../components/TagTool";
import Header from "../components/Title";

//assest
import Temp_Vis from "../asset/Temperature_Visulization.png";

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

class API extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initViz();
  }

  //Function call API
  initViz() {
    const vizUrl =
      "https://public.tableau.com/views/temperature_15988427606310/Dashboard1?:device=tablet";
    const options = {
      height: "220vh",
      width: "100%",
      hideTabs: false,
      hideToolbar: true,
    };
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options);
  }

  render() {
    return (
      <>
        <Navbar />
        <main>
          {/* Hero unit */}
          <Header
            title="Temperature in Australia"
            subtitle="Get more awareness of Temperature in Australia"
          ></Header>
          {/* End hero unit */}
        </main>

        {/* card container */}

        <div
          style={{
            paddingLeft: "1%",
            paddingBottom: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          ref={(div) => {
            this.vizContainer = div;
          }}
        />
        <TagTool></TagTool>
        <Footer></Footer>
      </>
    );
  }
}

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
              Temperature in Australia
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Get more awareness of Temperature in Australia
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
      <Footer></Footer>
    </>
  );
}
export default API;
