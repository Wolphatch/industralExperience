import React, { useEffect } from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { bounceIn } from "react-animations";
import { flash } from "react-animations";
import Radium, { StyleRoot } from "radium";
import axios from "axios";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

//components
import Navbar from "../components/Navbar";
import TagTool from "../components/TagTool";
import Footer from "../components/Footer";
import Swiper from "react-id-swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required components
import SwiperCore, {
  EffectCoverflow,
  EffectFlip,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// assets
import bg1 from "../asset/quizzes/bg8.jpg";
import bg1x1 from "../asset/quizzes/bg5.jpg";
import bg1x2 from "../asset/quizzes/bg6.jpg";
import bg1x3 from "../asset/quizzes/bg6.png";
import bg1x4 from "../asset/quizzes/bg5.png";
import bg1x5 from "../asset/quizzes/bg7.jpg";
import bg2 from "../asset/quizzes/bg2.png";
import { Link } from "react-router-dom";

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
    padding: theme.spacing(27, 0, 27),
  },
  headingContent: {
    padding: theme.spacing(8, 12, 2),
    color: "#fdfdfd",
  },
  headingContent1: {
    padding: theme.spacing(0, 10, 12),
  },
  headingContent2: {
    padding: theme.spacing(4, 0, 0),
    color: "#fdfdfd",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
  },
  placeHolder: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  placeHolder2: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: 0,
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
    //maxHeight: theme.spacing(50),
  },
  titleStyle: {
    padding: theme.spacing(20, 20, 5),
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",
  },
  titleStyle1: {
    padding: theme.spacing(5, 10, 5),
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",
  },
  titleStyle2: {
    color: "#000000",
    fontSize: 80,
    fontWeight: "bold",
  },
  titleStyle3: {
    padding: theme.spacing(3, 65, 0),
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitleStyle: {
    color: "#fdfdfd",
  },
  rank: {
    display: "flex",
  },
  quize: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  start: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(35),
  },
  textIn: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

SwiperCore.use([
  Navigation,
  Pagination,
  EffectFlip,
  EffectCoverflow,
  Mousewheel,
]);
const styles = {
  flash: {
    animation: "flash 2s infinite",
    animationName: Radium.keyframes(flash, "flash"),
    color: "#fdfdfd",
  },
  bounceIn: {
    animation: "flash 2s infinite",
    animationName: Radium.keyframes(bounceIn, "bounceIn"),
  },
};

function Quizzes1(props) {
  const [userName, setUserName] = React.useState(props.location.param1);
  const [index1, setIndex1] = React.useState(props.location.param2);
  console.log("current Username = " + userName);

  const classes = whatever();

  const pageSwiperProp = {
    // direction: "flex",
    // slidesPerView: 1,
    // spaceBetween: 30,
    // mousewheel: true,
    // autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
  };

  useEffect(() => {
    let tempUsername =
      userName == null
        ? localStorage.getItem("username")
        : props.location.param1;
    setUserName(() => tempUsername);
    getQuizzes();
  }, []);

  useEffect(() => {
    localStorage.setItem("username", userName);
  }, [userName]);

  // "{" + '"' + "quiz_id" + '"' + ":" + randomInt(1, 6) + "}"

  const getQuizzes = () => {
    var quizSeriesPair = { quiz_id: 1 };
    quizSeriesPair.quiz_id = index1 == null ? randomInt(1, 6) : index1;
    // if (index1 == null) {
    //   quizSeriesPair.quiz_id = randomInt(1, 6);
    // } else {
    //   quizSeriesPair.quiz_id = index1;
    // }
    axios({
      method: "post",
      url: "https://kv2t6suexk.execute-api.ap-southeast-2.amazonaws.com/test",
      data: JSON.stringify(quizSeriesPair),
    })
      .then(function (response) {
        console.log(response);
        const received = response.data.body;
        setStartEnable(() => true);
        mapQuiz(received);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [start, setStart] = React.useState(true);
  const [startEnable, setStartEnable] = React.useState(false);

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const [quizBundle, setQuizBundle] = React.useState({
    quizSeries: 0,
    questions: [],
  });

  const [userComplete, setUserComplete] = React.useState({
    userCompleted: 0,
    totalQuiz: 9,
    userScore: 0,
    userMark: 0,
  });

  const handleChange = (event, other) => {
    let currentQuestionIndex = other.questionIndex;
    let tempQuizBody = quizBundle;
    for (let index = 0; index < tempQuizBody.questions.length; index++) {
      if (tempQuizBody.questions.questionIndex === currentQuestionIndex) {
        //b
        tempQuizBody.questions[index] = other;
      }
    }
    //c
    setQuizBundle(() => tempQuizBody);
    console.log(quizBundle);
    //a
    //other["userSelect"] = event.target.value;
    other.userSelect = event.target.value;

    checkComplete();
  };

  const quizBody = {
    quizSeries: 0,
    questions: [],
  };

  const mapQuiz = (received) => {
    let tempQuestion = " ";
    let tempAnwersIndex = " ";
    let currentAnswer = " ";
    let tempAnswers = [];
    let questionIndex = 0;
    let tempCorrectAnswer = " ";
    let tempUserInput = " ";

    quizBody.quizSeries = received[0][0];

    for (let i = 0; i < received.length; i++) {
      for (let j = 0; j < received[i].length; j++) {
        switch (j) {
          case 1:
            questionIndex = received[i][j];
            break;
          case 2:
            tempQuestion = received[i][j];
            break;
          case 3:
            tempAnwersIndex = received[i][j];
            break;
          case 4:
            currentAnswer = received[i][j];
            break;
          case 5:
            if (received[i][j] === 1) {
              tempCorrectAnswer = currentAnswer;
            }
            //tempCorrectAnswer = received[i][j] === 1 ? currentAnswer : " ";
            break;

          default:
            break;
        }
      }
      tempAnswers.push(currentAnswer);
      if (i + 1 < received.length) {
        if (received[i][1] !== received[i + 1][1]) {
          quizBody.questions.push({
            questionIndex: questionIndex,
            question: tempQuestion,
            answers: tempAnswers,
            correctAnswer: tempCorrectAnswer,
            userSelect: tempUserInput,
          });
          tempAnswers = [];
        }
      } else if (i + 1 === received.length) {
        quizBody.questions.push({
          questionIndex: questionIndex,
          question: tempQuestion,
          answers: tempAnswers,
          correctAnswer: tempCorrectAnswer,
          userSelect: tempUserInput,
        });
        // console.log("I add something");
      }
    }
    setQuizBundle(() => quizBody);
    console.log(quizBundle);
  };

  const mapSlide = (quizGroup) => {
    let slideGroup = [];

    quizGroup.questions.map((question, key) => {
      slideGroup.push(
        <div>
          <Typography
            className={classes.titleStyle2}
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
          >
            {"Quiz" + (key + 1)}
          </Typography>
          <Typography
            className={classes.titleStyle1}
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
          >
            {question.question}
          </Typography>

          <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup 
              aria-label="Quiz"
              name={"Quiz" + (key + 1)}
              //value={value}
              onChange={(e) => handleChange(e, question)}
            >
              {mapAnswers(question.answers)}
            </RadioGroup>
          </FormControl>
        </div>
      );
      return null;
    });
    return slideGroup;
  };

  const mapAnswers = (answers) => {
    let answerGroup = [];

    for (let index = 0; index < answers.length; index++) {
      answerGroup.push(
        <div className={classes.titleStyle3}>
          <FormControlLabel
            value={answers[index]}
            control={<Radio />}
            label={answers[index]}
          />
        </div>
      );
    }
    return answerGroup;
  };

  const checkComplete = () => {
    let retVal = {};
    let userCompleted = 0;
    let userScore = 0;
    let userMark = 0;
    quizBundle.questions.forEach((element) => {
      userCompleted += element.userSelect !== " " ? 1 : 0;
      userScore += element.correctAnswer === element.userSelect ? 1 : 0;
    });

    userMark = Math.round(
      (userScore / quizBundle.questions.length + Number.EPSILON) * 100
    );

    retVal["userCompleted"] = userCompleted;
    retVal["totalQuiz"] = quizBundle.questions.length;
    retVal["userScore"] = userScore;
    retVal["userMark"] = userMark;

    console.log(retVal);
    setUserComplete(() => retVal);
  };
  
  const variousBg = (number) => {
    var bg = "";
    if (number == 1) {bg = bg1;}
    if (number == 2) {bg = bg1x1;}  
    if (number == 3) {bg = bg1x2;}   
    if (number == 4) {bg = bg1x3;}
    if (number == 5) {bg = bg1x4;} 
    if (number == 6) {bg = bg1x5;} 
    console.log(bg); 
    return bg;
  }

  return (
    <>
      <Navbar />
      <main>
        {start ? (
          <div
            className={classes.heroContent}
            style={{
              width: "auto",
              // height: "300px",
              backgroundImage: `url(${bg2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={classes.start}>
              {startEnable ? (
                <StyleRoot>
                  <div style={styles.flash}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        setStart(false);
                      }}
                    >
                      Start test
                    </Button>
                  </div>
                </StyleRoot>
              ) : (
                <Button variant="contained" color="secondary" disabled>
                  Loading quiz...
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div
            style={{
              paddingTop: "75px",
              paddingBottom: "200px",
              // width: "1020px",
              height: "100%",
              backgroundImage: `url(${variousBg(randomInt(1, 6))})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Swiper {...pageSwiperProp}>
              {mapSlide(quizBundle)}
              <div>
                <Typography
                  className={classes.titleStyle2}
                  component="h1"
                  variant="h1"
                  align="center"
                  color="textPrimary"
                >
                  Summary
                </Typography>
                <Typography
                  className={classes.titleStyle}
                  component="h1"
                  variant="h1"
                  align="center"
                  color="textPrimary"
                >
                  {userComplete.userCompleted === userComplete.totalQuiz
                    ? "You have finish all the quiz"
                    : "There are still quiz waiting for you to attempt"}
                </Typography>
                <Typography
                  className={classes.titleStyle}
                  component="h1"
                  variant="h1"
                  align="center"
                  color="textPrimary"
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to={{
                      pathname: "./result",
                      param1: quizBundle,
                      param2: userComplete,
                      param3: userName,
                    }}
                  >
                    Submit all and Finish
                  </Button>
                </Typography>
              </div>
            </Swiper>
          </div>
        )}
        <TagTool></TagTool>
        <Footer />
      </main>
    </>
  );
}

export default Quizzes1;
