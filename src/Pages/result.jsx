import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { bounceIn } from "react-animations";
import { flash } from "react-animations";
import Radium, { StyleRoot } from "radium";
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

  const [backEnable, setBackEnable] = React.useState(false);

  const [disabled, setDisabled] = React.useState(false);

  const changeBackEnable = () => {
    setBackEnable(() => !backEnable);
  };

  const changeDisabled = () => {
    setDisabled(() => !disabled);
  };

  const color = () => {
    var result = "";
    if (userComplete.userMark >= 90) {
      result = "#581b98";
    }
    if (userComplete.userMark >= 75 && userComplete.userMark < 90) {
      result = "#fc5185";
    }
    if (userComplete.userMark >= 50 && userComplete.userMark < 75) {
      result = "#2cb978";
    }
    if (userComplete.userMark >= 0 && userComplete.userMark < 50) {
      result = "#482ff7";
    }
    return result;
  };

  const suggestion = () => {
    var suggestion = "";
    if (quizBundle.quizSeries == 1 && userComplete.userMark <100){
      suggestion = "Please learn more in What is drought page in the drought backgound";
    }
    if (quizBundle.quizSeries == 1 && userComplete.userMark == 100){
      suggestion = "Good understanding about what is drought";
    }
    if (quizBundle.quizSeries == 2 && userComplete.userMark <100){
      suggestion = "Please learn more in Why drought happens page in the drought backgound";
    }
    if (quizBundle.quizSeries == 2 && userComplete.userMark == 100){
      suggestion = "Good understanding about why drought happens";
    }
    if (quizBundle.quizSeries == 3 && userComplete.userMark <100){
      suggestion = "Please learn more in Damage page in the drought backgound";
    }
    if (quizBundle.quizSeries == 3 && userComplete.userMark == 100){
      suggestion = "Good understanding about damage of drought";
    }
    if (quizBundle.quizSeries == 4 && userComplete.userMark <100){
      suggestion = "Please learn more in countermeasure page in the how to prevent drought";
    }
    if (quizBundle.quizSeries == 4 && userComplete.userMark == 100){
      suggestion = "Good understanding about how to prevent drought";
    }
    if (quizBundle.quizSeries == 5 && userComplete.userMark <100){
      suggestion = "Please learn more in virtualisation pages";
    }
    if (quizBundle.quizSeries == 5 && userComplete.userMark == 100){
      suggestion = "Good understanding about virtualisation pages";
    }
    if (quizBundle.quizSeries == 6 && userComplete.userMark <100){
      suggestion = "Please learn more in History of drought page in the drought backgound";
    }
    if (quizBundle.quizSeries == 6 && userComplete.userMark == 100){
      suggestion = "Good understanding about history of drought";
    }
    return suggestion;
  };

  // const WrongAnswer = () => {
  //   var correctAuswers = "";
  //   console.log(quizBundle);
  //   if (userComplete.userMark < 100) {
  //     for (var i = 0; i < quizBundle.questions.length; i++) {
  //       if (
  //         quizBundle.questions[i].correctAnswer !==
  //         quizBundle.questions[i].userSelect
  //       ) {
  //         var b = i + 1;
  //         var userAnswer = "";
          // if (quizBundle.questions[i].userSelect === " ") {
          //   userAnswer = "nothing";
          // } else {
          //   userAnswer = quizBundle.questions[i].userSelect;
          // }
  //         correctAuswers +=
  //           "In the question " +
  //           b +
  //           ", you choose " +
  //           userAnswer +
  //           " but correct answer is " +
  //           quizBundle.questions[i].correctAnswer +
  //           "\n";
  //       }
  //       correctAuswers += "In the question "+ b +": "+quizBundle.questions[i].question +"\nyou choose " + userAnswer + " but correct answer is " + quizBundle.questions[i].correctAnswer + "\n\n"
  //     }
  //   } else {
  //     correctAuswers = "Congratulations! You answer all questions correct!!!";
  //   }
  //   return correctAuswers;
  // };

  function createData(name, correctAnswer, yourAnswer, isRight) {
    return { name, correctAnswer, yourAnswer, isRight};
  }

  const allResults = () => {
    console.log(quizBundle);
    var rows = [];
    var isCorrect = "";
    var userAnswer = "";
    for (var i = 0; i < quizBundle.questions.length; i++) {
      if (quizBundle.questions[i].userSelect === " ") {
        userAnswer = "nothing";
      } else {
        userAnswer = quizBundle.questions[i].userSelect;
      }
      if (quizBundle.questions[i].correctAnswer == userAnswer)
       { isCorrect = "correct"}else {isCorrect = "incorrect"}
      rows[i] = createData(quizBundle.questions[i].question,quizBundle.questions[i].correctAnswer, userAnswer,isCorrect);
    }
    return rows;
  }



  const judge = () => {
    var result = "";
    if (userComplete.userMark >= 90) {
      result = "unbelievable!!!!";
    }
    if (userComplete.userMark >= 75 && userComplete.userMark < 90) {
      result = "G r e a t !!!";
    }
    if (userComplete.userMark >= 50 && userComplete.userMark < 75) {
      result = "G o o d !!";
    }
    if (userComplete.userMark >= 0 && userComplete.userMark < 50) {
      result = "c o o l !";
    }
    return result;
  };

  const putUsername = () => {
    changeDisabled();
    let request = { username: userName };
    axios({
      method: "post",
      url: "https://nd8gowv4o5.execute-api.ap-southeast-2.amazonaws.com/test",
      data: JSON.stringify(request),
    })
      .then(function (response) {
        console.log(response);
        let id = response.data.id;
        console.log(quizBundle.quizSeries);
        getAttempid(id, quizBundle.quizSeries);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getAttempid = (userId, quizId) => {
    let request = { user_id: userId, quiz_id: quizId };
    axios({
      method: "post",
      url: "https://fnb4o8qb9j.execute-api.ap-southeast-2.amazonaws.com/test",
      data: JSON.stringify(request),
    })
      .then(function (response) {
        console.log(response);
        let attemptId = response.data.body.attempt_id;
        let userMark = userComplete.userMark;
        postScore(attemptId, userMark);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const postScore = (attemptId, userMark) => {
    let request = { attempt_id: attemptId, attempt_mark: userMark };
    axios({
      method: "post",
      url: "https://ujf4cexl2l.execute-api.ap-southeast-2.amazonaws.com/test",
      data: JSON.stringify(request),
    })
      .then(function (response) {
        console.log(response);
        changeBackEnable();
      })
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
      padding: theme.spacing(7, 100, 0),
    },
    titleStyle: {
      padding: theme.spacing(17, 0, 0),
      color: "#000000",
      fontSize: 40,
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
    titleStyle3: {
      color: "#000000",
      fontSize: 20,
      fontWeight: "bold",
      padding: theme.spacing(0, 0, 0),
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
    table: {
      paddingTop: theme.spacing(10),
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
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          {...resultProp}
          className={classes.titleStyle}
          align="center"
        >
          Hi! {userName}
        </Typography>
        <Typography
          {...resultProp}
          className={classes.titleStyle2}
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
          {"Your got " + userComplete.userScore + " correct answer, "}
          {"your final mark is " +
            Math.round(
              (userComplete.userScore / userComplete.totalQuiz +
                Number.EPSILON) *
                100
            )}
        </Typography>
        <Typography
          {...resultProp}
          className={classes.titleStyle2}
          align="center"
        >
          {suggestion()}
        </Typography>
        {/* <div
          {...resultProp}
          className={classes.titleStyle2}
          align="center"
          style={{
            "white-space": "pre-wrap",
          }}
        >
          {WrongAnswer()}
        </div> */}
        <div className={classes.table}></div>
        <div align="center">
         <TableContainer component={Paper} style={{ maxWidth: "800px"}}  >
      <Table size="small" aria-label="a dense table" style={{ maxWidth: "800px"}}>
        <TableHead>
          <TableRow>
            <TableCell style={{ maxWidth: "80px",fontSize: 20,fontWeight: "bold"}}>Questions</TableCell>
            <TableCell align="center" style={{ width: "10%", padding: "20px",fontSize: 20,fontWeight: "bold"}}>Correct Answer</TableCell>
            <TableCell align="center"style={{ width: "10%", padding: "20px",fontSize: 20,fontWeight: "bold"}}>Your Answer</TableCell>
            <TableCell align="center" style={{ width: "10%", padding: "20px",fontSize: 20,fontWeight: "bold"}}>Is Right?</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {allResults().map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{ maxWidth: "80px"}}>
                {row.name}
              </TableCell>
              <TableCell style={{ width: "10%", padding: "20px"}}align="center">{row.correctAnswer}</TableCell>
              <TableCell style={{ width: "10%", padding: "20px"}}align="center">{row.yourAnswer}</TableCell>
              <TableCell style={{ width: "10%", padding: "20px"}}align="center">{row.isRight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
        <Typography {...resultProp} className={classes.textIn}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={{
              pathname: "./quizzes1",
              param1: userName,
              param2: quizBundle.quizSeries,
            }}
          >
            Try again
          </Button>

          {backEnable ? (
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={{
                pathname: "./quizzes",
              }}
            >
              Go Back
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled={disabled}
              color="secondary"
              onClick={putUsername}
            >
              {disabled ? "Uploading..." : "Upload my score"}
            </Button>
          )}
        </Typography>
        <StyleRoot>
          <div style={styles.bounceIn}>
            <Typography
              className={classes.titleStyle1}
              // style={{ position: "absolute" }}
              align="center"
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
