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

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//assest
import card_img_1 from "../asset/homePage/card_img_1.jpg";
import card_img_2 from "../asset/homePage/card_img_2.jpg";
import card_img_3 from "../asset/homePage/card_img_3.png";
import history_img from "../asset/homePage/background.jpg";

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
  placeHolder: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
}));

const cards = [
  {
    title: "Introduction to drought",
    desciption: "Understand drought in one picture",
    image: card_img_1,
    linkText: "check it out",
    linkTo: "/Intro",
  },
  {
    title: "Casue of drought",
    desciption: "Learn the diifferent factor that cause drought",
    image: card_img_2,
    linkText: "check it out",
    linkTo: "/Cause",
  },
  {
    title: "Chronology of drought",
    desciption: "A time of drought history in Australia",
    image: history_img,
    linkText: "check it out",
    linkTo: "/Chronology",
  },
  {
    title: "Temperature Visulization",
    desciption: "Learn about temperature in Australia",
    image: card_img_3,
    linkText: "check it out",
    linkTo: "/dataVis_1",
  },
  {
    title: "Water Evaporation",
    desciption: "Learn about Water Evaporation in Australia",
    image: card_img_3,
    linkText: "check it out",
    linkTo: "/dataVis_2",
  },
  {
    title: "Rainfall Visulization",
    desciption: "Learn about rainfall in Australia",
    image: card_img_3,
    linkText: "check it out",
    linkTo: "/dataVis_3",
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

function fact() {
  const classes = whatever();

  return (
    <>
      <Navbar />
      <main>
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
        </div>
        {/* End hero unit */}

        {/* card container */}
        <Container className={classes.cardGrid} maxWidth="xl">
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
            {mapCard(cards.slice(3, 6))};
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default fact;
