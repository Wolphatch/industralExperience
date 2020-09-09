import React from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//asset
import drought_intro from "../asset/cardImage/Drought_Intro.png";
import cause_of_drought from "../asset/cardImage/Cause_of_Drought.png";
import drought_history from "../asset/cardImage/drought_history.png";
import Viz1 from "../asset/cardImage/temp.jpg";
import Viz2 from "../asset/cardImage/evap.jpg";
import Viz3 from "../asset/cardImage/Rainfall.jpg";
import Viz4 from "../asset/cardImage/water.jpg";

const whatever = makeStyles((theme) => ({
  titleTemp: {
    color: "#2f89fc",
    marginTop: theme.spacing(45),
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
  headerContent: {
    paddingTop: theme.spacing(8),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  placeHolder: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  root: {
    maxWidth: 345,
  },
}));

const cards = [
  {
    title: "Introduction to drought",
    desciption: "Understand drought in one picture",
    image: drought_intro,
    linkText: "check it out",
    linkTo: "/Intro",
  },
  {
    title: "Casue of drought",
    desciption: "Learn the diifferent factor that cause drought",
    image: cause_of_drought,
    linkText: "check it out",
    linkTo: "/Cause",
  },
  {
    title: "Chronology of drought",
    desciption: "A time of drought history in Australia",
    image: drought_history,
    linkText: "check it out",
    linkTo: "/Chronology",
  },
  {
    title: "Temperature Visulization",
    desciption: "Learn about temperature in Australia",
    image: Viz1,
    linkText: "check it out",
    linkTo: "/dataVis_Temp",
  },
  {
    title: "Water Evaporation",
    desciption: "Learn about Water Evaporation in Australia",
    image: Viz2,
    linkText: "check it out",
    linkTo: "/dataVis_evap",
  },
  {
    title: "Rainfall Visulization",
    desciption: "Learn about rainfall in Australia",
    image: Viz3,
    linkText: "check it out",
    linkTo: "/dataVis_Rainfall",
  },
  {
    title: "Water consumption",
    desciption: "Save water to relieve drought",
    image: Viz4,
    linkText: "check it out",
    linkTo: "/dataVis_WaterConsumption",
  },
];

const mapCard = (cardGroup) => {
  const classes = whatever();

  let cardUI = [];

  cardGroup.map((card, key) => {
    cardUI.push(
      <Grid item id={key} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={card.image}
            title={card.title}
            component={Link}
            to={card.linkTo}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.title}
            </Typography>
            <Typography>{card.desciption}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={card.linkTo}
            >
              {card.linkText}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
    return null;
  });
  return cardUI;
};

const fact = (props) => {
  const classes = whatever();

  return (
    <>
      <main>
        {/* comment out on 07/09 due to team conflict */}
        {/* <div ref={myRef} className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Drought in Australia
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                A quick walkthrough
              </Typography>
            </Container>
          </div> */}
        {/* End hero unit */}

        {/* card container */}
        <Container ref={props.myRef} className={classes.cardGrid} maxWidth="xl">
          {/* grid container */}
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Background Information
              </Typography>
            </Container>
          </div>
          <Container className={classes.placeHolder} />
          <Grid container spacing={4}>
            {mapCard(cards.slice(0, 3))};
          </Grid>
          <Container className={classes.placeHolder} />

          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Visulization
              </Typography>
            </Container>
          </div>
          <Container className={classes.placeHolder} />
          <Grid container spacing={4}>
            {mapCard(cards.slice(3, cards.length))};
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default fact;
