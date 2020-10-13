import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { flash } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Button from "@material-ui/core/Button";

//asset
import main_background from "../asset/homePage/main_background.jpg";
import DownArrow from "../asset/homePage/downArrow.png";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "relative",
    paddingTop: "350px",
  },
  eachImgSlide: {
    width: "100%",
    height: "100%",
  },
}));

const styles = {
  flash: {
    animation: "flash 2s infinite",
    animationName: Radium.keyframes(flash, "flash"),
  },
};

const imgSlideStyle = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "auto",
  height: "1010px",
};

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Homepage = (props) => {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          ...imgSlideStyle,
          backgroundSize: "cover",
          backgroundImage: `url(${main_background})`,
        }}
      >
        <div className={classes.title}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Learn Everything About Drought
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Learn and test your understanding of the drought in Australia
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            <Button
              style={{
                backgroundColor: "#17b978",
              }}
              variant="contained"
              color="secondary"
              onClick={props.onClick}
            >
              Get Started
            </Button>
          </Typography>
        </div>
        <StyleRoot>
          {/* <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
            style={{
              position: "relative",
              marginTop: "50px",
            }}
          >
            Scroll Down
          </Typography> */}
          <div style={styles.flash}>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              <img
                src={DownArrow}
                alt="..."
                style={{
                  position: "relative",
                  //   marginTop: "350px",
                  //   left: "48%",
                  width: "50px",
                  height: "50px",
                  color: "black",
                }}
                // onClick={() => scrollToRef(props.myRef)}
              />
            </Typography>
          </div>
        </StyleRoot>
      </div>
    </>
  );
};

export default Homepage;
