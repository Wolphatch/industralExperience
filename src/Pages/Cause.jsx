import React from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//assest
import climateChange from "../asset/pic_userstory_2/picture1.png";
import Air from "../asset/pic_userstory_2/picture2.png";
import greenhouse from "../asset/pic_userstory_2/picture3.png";

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
}));

const cards = [
  {
    headerText: "climate change",
    headerAvatar: "C",
    title: "Climate change",
    desciption:
      "Fronts from the Southern Ocean have shifted southwards as a warming climate, it originally brings rainfall in southern Australia in winter and spring so the southwest and southeast Australia may have a decline in rainfall and become warmer, so it faces a high risk of drought.",
    image: climateChange,
    linkText: "check it out",
    linkTo: "/Intro",
  },
  {
    headerText: "Air circulation and weather patterns",
    headerAvatar: "A",
    title: "Air circulation and weather pattern",
    desciption:
      "Air circulation and weather patterns also cause drought. All the water we ever had we have today and it is stored in the air or on land. Weather patterns move the water in the air around. This is constantly changing.",
    image: Air,
    linkText: "check it out",
    linkTo: "/Cause",
  },
  {
    headerText: "Gresshouse gas emmissions",
    headerAvatar: "G",
    title: "Gresshouse gas emmissions",
    desciption:
      "Global air temperatures have risen with the increasing greenhouse gas concentrations (Timbal and Drosdowsky 2012; CSIRO 2012). For Australia, warmer temperatures caused by greenhouse gas emissions lead to less rainfall, which is a part the people have the capacity of controlling it to prevent drought.",
    image: greenhouse,
    linkText: "Not avaliable",
    linkTo: "/404",
  },
];

function Cause() {
  const classes = whatever();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mapCard = () => {
    const classes = whatever();

    let cardUI = [];

    cards.map((card, key) => {
      cardUI.push(
        <Grid item id={key} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label={card.headerText} className={classes.avatar}>
                  {card.headerAvatar}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.headerText}
            />
            <CardMedia
              className={classes.cardMedia}
              image={card.image}
              title={card.title}
              onClick={handleExpandClick}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {card.title}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{card.desciption}</Typography>
              </CardContent>
            </Collapse>
          </Card>
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
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Cause of drought
            </Typography>
            <Typography
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
        <Container className={classes.cardGrid} maxWidth="md">
          {/* grid container */}
          <Grid container spacing={4}>
            {mapCard()};
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Cause;
