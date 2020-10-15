import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Result = (props) => {
  const [quizBundle, setQuizBundle] = React.useState(props.location.param1);

  const [userComplete, setUserComplete] = React.useState(props.location.param2);

  console.log(quizBundle);
  console.log(userComplete);

  const resultProp = {
    component: "h1",
    variant: "h1",
    align: "center",
    color: "textPrimary",
  };

  return (
    <>
      <div>
        <Typography {...resultProp}>
          {"You have try " +
            userComplete.userCompleted +
            " question out of total " +
            userComplete.totalQuiz +
            " questions"}
        </Typography>
        <Typography {...resultProp}>
          {"Your got " + userComplete.userScore + " correct answer"}
        </Typography>
        <Typography {...resultProp}>
          {"Your final mark is " +
            Math.round(
              (userComplete.userScore / userComplete.totalQuiz +
                Number.EPSILON) *
                100
            ) /
              100}
        </Typography>
        <Typography {...resultProp}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={{
              pathname: "./quizzes1",
              param1: quizBundle,
              param2: userComplete,
            }}
          >
            Try again
          </Button>
        </Typography>
      </div>
    </>
  );
};

export default Result;
