import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { bounceIn } from "react-animations";
import { flash } from "react-animations";
import Radium, { StyleRoot } from "radium";
import axios from "axios";

//components
import Navbar from "../components/Navbar";

//assest
import bg1 from "../asset/quizzes/bg3.png";

const styles = {
  flash: {
    animation: "flash 3s infinite",
    animationName: Radium.keyframes(flash, "flash"),
    color: "#fdfdfd",
  },
  bounceIn: {
    animation: "flash 2s infinite",
    animationName: Radium.keyframes(bounceIn, "bounceIn"),
  },
};

const Result = (props) => {
  const [quizBundle, setQuizBundle] = React.useState(props.location.param1);

  const [userComplete, setUserComplete] = React.useState(props.location.param2);

  const [userName, setUserName] = React.useState(props.location.param3);

  const color = () => {
    var result = "";
    if (userComplete.userMark >= 90) {
      result = "#88bef5";
    }
    if (userComplete.userMark >= 75 && userComplete.userMark < 90) {
      result = "#fccde2";
    }
    if (userComplete.userMark >= 50 && userComplete.userMark < 75) {
      result = "#2cb978";
    }
    if (userComplete.userMark >= 0 && userComplete.userMark < 50) {
      result = "#ff1f5a";
    }
    return result;
  };

  const judge = () => {
    var result = "";
    if (userComplete.userMark >= 90) {
      result = "unbelievable!!!";
    }
    if (userComplete.userMark >= 75 && userComplete.userMark < 90) {
      result = "G r e a t";
    }
    if (userComplete.userMark >= 50 && userComplete.userMark < 75) {
      result = "G o o d";
    }
    if (userComplete.userMark >= 0 && userComplete.userMark < 50) {
      result = "Oh my god!";
    }
    return result;
  };

  const putUsername = () => {
    let request = { username: userName };
    axios({
      method: "put",
      url: "https://nd8gowv4o5.execute-api.ap-southeast-2.amazonaws.com/test",
      data: JSON.stringify(request),
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const postScore = () => {
    let request = {};
    axios({
      method: "post",
      url: "https://ujf4cexl2l.execute-api.ap-southeast-2.amazonaws.com/test",
      data: JSON.stringify(request),
    })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const whatever = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    warning: {
      color: "#bf1650",
      display: "inline",
      content: "⚠",
    },
    heroContent: {
      // backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(16, 0, 27),
    },
    headingContent: {
      padding: theme.spacing(27, 0, 27),
    },
    headingContent1: {
      padding: theme.spacing(7, 90, 0),
    },
    titleStyle: {
      padding: theme.spacing(15, 0, 0),
      color: "#000000",
      fontSize: 20,
      fontWeight: "bold",
    },
    titleStyle1: {
      // padding: theme.spacing(5,15,0,0),
      color: color(),
      fontSize: 60,
      fontWeight: "bold",
    },
    titleStyle2: {
      color: "#000000",
      fontSize: 20,
      fontWeight: "bold",
      padding: theme.spacing(5, 0, 0),
    },
    subtitleStyle: {
      color: "#fdfdfd",
    },
    subtitleStyle1: {
      color: "#000000",
    },
    start: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: theme.spacing(8),
    },
    textIn: {
      "& > *": {
        margin: theme.spacing(3),
        width: "30ch",
      },
    },
  }));

  const classes = whatever();

  const resultProp = {
    component: "h1",
    variant: "h1",
    align: "center",
    color: "textPrimary",
  };

  return (
    <>
      <Navbar />
      <div
        className={classes.heroContent}
        style={{
          width: "auto",
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          {...resultProp}
          className={classes.titleStyle}
          align="center"
        >
          {"You have try " +
            userComplete.userCompleted +
            " question out of total " +
            userComplete.totalQuiz +
            " questions"}
        </Typography>
        <Typography
          {...resultProp}
          className={classes.titleStyle2}
          align="center"
        >
          {"Your got " + userComplete.userScore + " correct answer"}
        </Typography>
        <Typography
          {...resultProp}
          className={classes.titleStyle2}
          align="center"
        >
          {"Your final mark is " +
            Math.round(
              (userComplete.userScore / userComplete.totalQuiz +
                Number.EPSILON) *
                100
            )}
        </Typography>
        <Typography {...resultProp} className={classes.textIn}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={{
              pathname: "./quizzes1",
            }}
          >
            Try again
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={putUsername}
            component={Link}
            to={{
              pathname: "./quizzes",
            }}
          >
            upload my score
          </Button>
        </Typography>
        <StyleRoot>
          <div style={styles.bounceIn} className={classes.headingContent1}>
            <Typography
              className={classes.titleStyle1}
              style={{ position: "absolute" }}
              align="right"
            >
              {judge()}
            </Typography>
          </div>
        </StyleRoot>
      </div>
    </>
  );
};

export default Result;
