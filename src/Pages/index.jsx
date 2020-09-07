import React, { useRef } from "react";

//Pages
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//Packages
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import { Typography, Grid, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ExploreIcon from "@material-ui/icons/Explore";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

//asset
import background4 from "../asset/homePage/background4.png";
import drought_intro from "../asset/cardImage/Drought_Intro.png";
import cause_of_drought from "../asset/cardImage/Cause_of_Drought.png";
import drought_history from "../asset/cardImage/drought_history.png";
import Viz1 from "../asset/cardImage/temp.jpg";
import Viz2 from "../asset/cardImage/evap.jpg";
import Viz3 from "../asset/cardImage/Rainfall.jpg";

const whatever = makeStyles((theme) => ({
  avater: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
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
  icon: {
    marginRight: theme.spacing(2),
  },
  IconButton: {
    marginTop: "200px",
  },
  heroButtons: {
    marginTop: theme.spacing(0),
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

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const MainPage = () => {
  const classes = whatever();

  const myRef = useRef(null);

  return (
    <>
      <div>
        <Navbar />
        <div
          style={{
            backgroundImage: `url(${background4})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: window.innerWidth,
            height: window.innerHeight,
          }}
        >
          {/*Header content*/}
          <div className={classes.headerContent}>
            {/* <Grid container justify="center">
              <Avatar className={classes.avater} src={temp} alt="..." />
                </Grid> */}
            {/* page 1*/}
            <Typography
              className={classes.titleTemp}
              component="h1"
              variant="h2"
              align="center"
              style={{
                maxWidth: window.innerWidth / 2,
                maxHeight: window.innerHeight / 2,
              }}
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
              style={{
                maxWidth: window.innerWidth / 2,
                maxHeight: window.innerHeight / 2,
              }}
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
            {/* <div className={classes.IconButton}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <IconButton aria-label="expand">
                      <ExpandMoreIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </div> */}
          </div>

          {/* page 2*/}
          {/* <Typography
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
                  Australia continent itself is the driest inhabited continent
                  on Earth.
                </p>
                <p>
                  Australias has the most variable rainfall and stream-flow on
                  Earth.
                </p>

                <p>
                  Hot extremes are becoming more frequent and intense
                  (IPCC2014).
                </p>
                </Typography> */}
          <div
            className={classes.heroButtons}
            style={{
              maxWidth: window.innerWidth / 2,
            }}
          >
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ExploreIcon />}
                  onClick={() => scrollToRef(myRef)}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>

        {/*Placeholder*/}
        <div style={{ height: 450 }} />
        {/*Main content*/}
        <main>
          {/* Hero unit */}
          <div ref={myRef} className={classes.heroContent}>
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
      </div>
    </>
  );
};

export default MainPage;
