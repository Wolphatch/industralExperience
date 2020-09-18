import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { flash } from "react-animations";
import Radium, { StyleRoot } from "radium";

//asset
import main from "../asset/homePage/main.png";
import DownArrow from "../asset/homePage/downArrow.png";

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
  heroIcon: {
    position: "relative",
    marginTop: "950px",
    left: "48%",
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

const styles = {
  flash: {
    animation: "flash 2s infinite",
    animationName: Radium.keyframes(flash, "flash"),
  },
};

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
        width: "auto",
        height: "1010px",
      }}
    >
      <StyleRoot>
        <div style={styles.flash}>
          <img
            className={classes.heroIcon}
            src={DownArrow}
            alt="..."
            style={{
              width: "50px",
              height: "50px",
              color: "black",
            }}
            onClick={() => scrollToRef(props.myRef)}
          />
        </div>
      </StyleRoot>
    </div>
  );
};

export default Header;
