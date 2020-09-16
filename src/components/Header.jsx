import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import { Typography, Grid, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ExploreIcon from "@material-ui/icons/Explore";

//asset
import main from "../asset/homePage/main.png";

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(70),
    marginLeft: theme.spacing(52),
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

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Header = (props) => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${main})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <Button
        className={classes.heroButtons}
        variant="contained"
        color="primary"
        size="large"
        endIcon={<ExploreIcon />}
        onClick={() => scrollToRef(props.myRef)}
      >
        Get Started
      </Button>
      {/* <div className={classes.headerContent}>
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
            Drought - Australia Natural Hazard:
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
      </div> */}

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
    </div>
  );
};

export default Header;
