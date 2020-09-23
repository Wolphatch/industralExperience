import React from "react";
import { Slide } from "react-slideshow-image";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { flash } from "react-animations";
import Radium, { StyleRoot } from "radium";

//asset
import main_background from "../asset/homePage/main_background.jpg";
import DownArrow from "../asset/homePage/downArrow.png";
import slideShow1 from "../asset/homePage/slideShow/slideShow1.png";
import slideShow2 from "../asset/homePage/slideShow/slideShow2.png";
import slideShow3 from "../asset/homePage/slideShow/slideShow3.png";
import slideShow4 from "../asset/homePage/slideShow/slideShow4.png";
import slideShow5 from "../asset/homePage/slideShow/slideShow5.png";

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

const images = [slideShow1, slideShow2, slideShow3, slideShow4, slideShow5];

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Header = (props) => {
  const classes = useStyles();

  const makeSlide = (image) => {
    let slide = [];

    slide.push(
      <div className="each-slide">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "auto",
            height: window.innerHeight,
          }}
        />
      </div>
    );
    return slide;
  };

  return (
    <div
    // style={{
    //   backgroundImage: `url(${main_background})`,
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   width: "auto",
    //   height: "1010px",
    // }}
    >
      <Slide easing="ease" autoplay={false}>
        <div
          className="each-slide"
          style={{
            backgroundImage: `url(${main_background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "auto",
            height: window.innerHeight,
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
              Learn and test your understanding of the drought in Australia in
              class
            </Typography>
          </div>
          <StyleRoot>
            <div style={styles.flash}>
              <img
                src={DownArrow}
                alt="..."
                style={{
                  position: "relative",
                  marginTop: "350px",
                  left: "48%",
                  width: "50px",
                  height: "50px",
                  color: "black",
                }}
                onClick={() => scrollToRef(props.myRef)}
              />
            </div>
          </StyleRoot>
        </div>

        {makeSlide([images[0]])}
        {makeSlide([images[1]])}
        {makeSlide([images[2]])}
        {makeSlide([images[3]])}

        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideShow5})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "auto",
              height: window.innerHeight,
            }}
          >
            <StyleRoot>
              <div style={styles.flash}>
                <img
                  src={DownArrow}
                  alt="..."
                  style={{
                    position: "relative",
                    marginTop: "900px",
                    left: "48%",
                    width: "50px",
                    height: "50px",
                    color: "black",
                  }}
                  onClick={() => scrollToRef(props.myRef)}
                />
              </div>
            </StyleRoot>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Header;
