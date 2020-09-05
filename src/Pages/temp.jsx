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
import Paper from "@material-ui/core/Paper";

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
import bubbleBox from "../asset/G5tbp.png";

import TagTool from "../components/TagTool";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
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
  avatar: {
    backgroundColor: red[500],
  },
  grid: {
    marginLeft: theme.spacing(0),
    background: bubbleBox,

    //backgroundColor: theme.palette.background.paper,
    height: "100%",
    width: "100%",
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

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
                Direct factors influence rainfall
              </Typography>
            </Container>
          </div>
          <Container className={classes.placeHolder} />
          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={8}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    Climate Change
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    square="false"
                    variant="h5"
                    align="left"
                    color="textSecondary"
                    paragraph
                  >
                    Fronts from the Southern Ocean have shifted southwards as a
                    warming climate, it originally brings rainfall in southern
                    Australia in winter and spring so the southwest and
                    southeast Australia may have a decline in rainfall and
                    become warmer, so it faces a high risk of drought.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={climateChange}
                />
              </Card>
            </Grid>
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
                Indirect factors lead to drought
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.paper}>xs</Paper>
                </Grid>
              </Grid>
            </Container>
          </div>
          <Container className={classes.placeHolder} />
        </Container>
      </main>

      <TagTool></TagTool>
      <Footer />
    </>
  );
}
