import React from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//assest
import climateChange from "../asset/pic_userstory_2/picture1.png";
import Air from "../asset/pic_userstory_2/picture2.png";
import greenhouse from "../asset/pic_userstory_2/picture3.png";
import soilTemp from "../asset/pic_userstory_2/PictureI1.png";
import soilMoisture from "../asset/pic_userstory_2/pictureI2.png";
import timeDifferent from "../asset/pic_userstory_2/PictureI3.png";
import saveWater from "../asset/pic_userstory_2/pictureI4.png";
import test from "../asset/waterDrop.jpg";

import TagTool from "../components/TagTool";

const whatever = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(25, 0, 25),
  },
  headingContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  placeHolder: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  placeHolder2: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  grid: {
    //maxHeight: theme.spacing(50),
  },
  titleStyle: {
    color: "#fdfdfd",
    fontSize: 80,
  },
  subtitleStyle: {
    color: "#fdfdfd",
  },
}));

const cards = [
  {
    headerText: "climate change",
    headerAvatar: "C",
    title: "Climate change",
    desciption:
      "Fronts from the Southern Ocean have shifted southwards as a warming climate, it originally brings rainfall in southern Australia in winter and spring so the southwest and southeast Australia may have a decline in rainfall and become warmer, so it faces a high risk of drought.",
    image: climateChange,
  },
  {
    headerText: "Air circulation and weather patterns",
    headerAvatar: "A",
    title: "Air circulation and weather pattern",
    desciption:
      "Air circulation and weather patterns also cause drought. All the water we ever had we have today and it is stored in the air or on land. Weather patterns move the water in the air around. This is constantly changing.",
    image: Air,
  },
  {
    headerText: "Gresshouse gas emmissions",
    headerAvatar: "G",
    title: "Gresshouse gas emmissions",
    desciption:
      "Global air temperatures have risen with the increasing greenhouse gas concentrations (Timbal and Drosdowsky 2012; CSIRO 2012). For Australia, warmer temperatures caused by greenhouse gas emissions lead to less rainfall, which is a part the people have the capacity of controlling it to prevent drought.",
    image: greenhouse,
  },
  {
    headerText: "Increasing temperatures of Land",
    headerAvatar: "I",
    title: "Increasing temperatures of Land",
    desciption:
      "The increasing temperatures of Land and water lead to more demand for water, so people or groups may use more water according to weather conditions, which may lead to drought.",
    image: soilTemp,
  },
  {
    headerText: "Soil moisture levels",
    headerAvatar: "S",
    title: "Soil moisture levels",
    desciption:
      "Soil moisture levels may lead to severe drought. water can be used for clouds if soil moisture is depleted, which may contribute to less rainfall while needing more water to repair these drought soil.",
    image: soilMoisture,
  },
  {
    headerText: "Way of supplying water",
    headerAvatar: "W",
    title: "Way of supplying water",
    desciption:
      "Wrong ways of supplying water also lead to drought. When using too much water in the period with sufficient rainfall, people may lack water in the period with insufficient rainfall. When a region has growing numbers of people, it means this region may also have a growing demand for water. When people adopt incorrect actions facing the water and hot period. A most simple example, over-irrigation may lead to drought.",
    image: timeDifferent,
  },
  {
    headerText: "Water distribution",
    headerAvatar: "W",
    title: "Water distribution",
    desciption:
      "People who have sufficient water waste may lead to drought even in one city. They do not know the horror that people lack water and may use water too much for unnecessary things. For example, in the southeast of Victoria may face drought while urban citizens use water causally. ",
    image: saveWater,
  },
];

function Cause() {
  const classes = whatever();

  // const handleStrip = (props) => {
  //   return props % 2 === 0 ? 4 : 8;
  // };

  const mapCard = (cardGroup) => {
    const classes = whatever();

    let cardUI = [];

    cardGroup.map((card, key) => {
      cardUI.push(
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={6}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h2" component="h2">
                {card.title}
              </Typography>
              <Typography
                square="false"
                variant="h5"
                align="left"
                color="textSecondary"
                paragraph
              >
                {card.desciption}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={6}>
            <CardMedia className={classes.cardMedia} image={card.image} />
          </Grid>
          <Container className={classes.placeHolder} />
        </Grid>
      );
      return null;
    });
    return cardUI;
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero unit */}
        <div
          className={classes.heroContent}
          style={{
            backgroundImage: `url(${test})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container maxWidth="md">
            <Typography
              className={classes.titleStyle}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Cause of drought
            </Typography>
            <Typography
              className={classes.subtitleStyle}
              component="h4"
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Understand the cause of drought
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}

        {/* card container */}
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* grid container */}
          <div className={classes.headingContent}>
            <Container maxWidth="md">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Direct factors influence rainfall
              </Typography>
            </Container>
          </div>
          <Container className={classes.placeHolder} />
          <Grid container spacing={1}>
            {mapCard(cards.slice(0, 3))};
          </Grid>

          <div className={classes.headingContent}>
            <Container maxWidth="md">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Indirect factors lead to drought
              </Typography>
            </Container>
          </div>
          <Container className={classes.placeHolder} />
          <Grid container spacing={1}>
            {mapCard(cards.slice(3, 7))};
          </Grid>
        </Container>
      </main>
      <TagTool></TagTool>
      <Footer />
    </>
  );
}

export default Cause;
