import React from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import RefreshIcon from "@material-ui/icons/Refresh";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Viz from "./viz";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TagTool from "../components/TagTool";

//assest
import waterIntro from "../asset/waterIntro.png";
import test_Welcome from "../asset/test_welcome.png";

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
  titleTemp: {
    color: "#2f89fc",
    marginLeft: theme.spacing(0),
  },
  title: {
    color: "#e8ffe8",
    marginLeft: theme.spacing(10),
  },
  subtitle: {
    color: "#10316b",
    marginBottom: "3rem",
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(30),
  },
  subtitle2: {
    color: "#10316b",
    marginBottom: "3rem",
    marginLeft: theme.spacing(10),
  },
  subtitle3: {
    color: "#10316b",
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  tip: {
    color: "#2f89fc",
    paddingTop: theme.spacing(5),
  },
  iframe: {
    margin: theme.spacing(20, 0, 0, 20),
  },
  selectorGrid: {
    marginTop: "20%",
    marginLeft: "15%",
  },
  selectorTitle: {
    color: "#2f89fc",
  },
  button: {
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(30),
  },
  button2: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
  },
  button3: {
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
  warning: {
    color: "#bf1650",
    display: "inline",
    content: "⚠",
  },
  form: {
    border: "1px",
    borderColor: "#4f6294",
  },
  box: {
    marginLeft: theme.spacing(3),
  },
}));

const schema = yup.object().shape({
  State: yup.string().required(),
  WaterConsum: yup.number().positive().integer().required().lessThan(1000000),
  familySize: yup.number().required(),
});

const Intro = () => {
  const classes = whatever();

  const listItems = ["VIC", "NSW", "QLD", "WA", "TSM", "SA", "NT", "ACT"];

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (request) => {
    console.log(request);
    axios({
      method: "post",
      url: "https://27gtcma2qg.execute-api.ap-southeast-2.amazonaws.com/test",
      data: JSON.stringify(request),
    })
      .then(function (response) {
        console.log(response);

        const received = JSON.parse(response.data.body);
        setData(() => received);
      })
      .catch(function (error) {
        console.log(error);
      });
    setFormSubmitted((formSubmitted) => !formSubmitted);
  };

  const getSuggestion = () => {
    axios({
      method: "get",
      url: "https://h5ikffqj8k.execute-api.ap-southeast-2.amazonaws.com/test",
    })
      .then(function (response) {
        const received = JSON.parse(response.data.body);
        setSuggestion(() => received);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [State, setState] = React.useState("");

  const [receivedData, setData] = React.useState("Received");

  const [suggestion, setSuggestion] = React.useState("");

  const [index, setIndex] = React.useState(0);

  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const [tipShow, setTipShow] = React.useState(false);

  const toggleTipShow = () => {
    setTipShow((tipShow) => !tipShow);
    setIndex(() => randomInt(0, 9));
    console.log("tip show set to " + tipShow);
    console.log("current tip " + suggestion[index]);
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const renderForm = () => {
    if (formSubmitted === true) {
      return result();
    } else {
      return inputForm();
    }
  };

  const inputForm = () => {
    return (
      <div
        style={{
          marginTop: "100px",
          marginLeft: "10%",
          width: "80%",
          height: "100%",
        }}
      >
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Typography
            className={classes.selectorTitle}
            component="h5"
            variant="h5"
            align="left"
            gutterBottom
          >
            State:
          </Typography>
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-select-currency-native"
              select
              name="State"
              inputRef={register({
                required: true,
              })}
              value={State}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
            >
              <option value="">Select State</option>
              {listItems.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </TextField>
            <div className={classes.warning}>
              <p>{errors.State?.message}</p>
            </div>
          </FormControl>

          <Typography
            className={classes.selectorTitle}
            component="h5"
            variant="h5"
            align="left"
            gutterBottom
          >
            Water Consumption(L per Month):
          </Typography>
          <FormControl className={classes.formControl}>
            <TextField
              name="WaterConsum"
              inputRef={register({
                required: true,
                min: 0,
                max: 1000000,
              })}
            />
            <div className={classes.warning}>
              <p>{errors.WaterConsum?.message}</p>
            </div>
          </FormControl>

          <Typography
            className={classes.selectorTitle}
            component="h5"
            variant="h5"
            align="left"
            gutterBottom
          >
            Family Size
          </Typography>
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-number"
              type="number"
              name="familySize"
              inputRef={register({
                required: true,
                maxLength: 1,
              })}
              inputProps={{
                max: 9,
                min: 1,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div className={classes.warning}>
              <p>{errors.familySize?.message}</p>
            </div>
          </FormControl>

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<CloudUploadIcon />}
            disabled={isSubmitting}
            type="submit"
            onClick={getSuggestion()}
          >
            Check Result
          </Button>
        </form>
      </div>
    );
  };

  const result = () => {
    return (
      <>
        <Typography
          className={classes.titleTemp}
          component="h4"
          variant="h4"
          align="left"
          gutterBottom
        >
          <Box fontWeight="fontWeightBold" m={1}>
            Result:
          </Box>
        </Typography>
        <Typography
          className={classes.subtitle3}
          component="h5"
          variant="h5"
          align="left"
          gutterBottom
        >
          <Box fontWeight="fontWeightBold" m={1}>
            {receivedData.testResult === "True"
              ? "Well done!"
              : "Need to improve."}
          </Box>
          <Box fontWeight="fontWeightBold" m={1}>
            Your family use {receivedData.waterConsumption} L
          </Box>
          <Box fontWeight="fontWeightBold" m={1}>
            The suggested water use per month is{" "}
            {receivedData.recommendedWaterUsage} L
          </Box>
        </Typography>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Button
              className={classes.button2}
              variant="contained"
              color="primary"
              size="large"
              onClick={() =>
                setFormSubmitted((formSubmitted) => !formSubmitted)
              }
              endIcon={<RefreshIcon />}
            >
              Try Again
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              className={classes.button3}
              variant="contained"
              color="primary"
              size="large"
              endIcon={<RefreshIcon />}
              onClick={toggleTipShow}
            >
              Show Tips
            </Button>
          </Grid>
          <Typography
            className={classes.tip}
            component="h5"
            variant="h5"
            align="left"
            gutterBottom
          >
            <Box fontWeight="fontWeightBold" m={1}>
              {tipShow === true ? suggestion[index] : null}
            </Box>
          </Typography>
        </Grid>
      </>
    );
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
              Water consumption in Australia
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Test your knowledge on water consumption
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}

        {/* <div>
          <img
            src={Temp_Vis}
            alt="..."
            style={{
              marginTop: "100px",
              marginLeft: "10%",
              width: "80%",
              height: "100%",
            }}
          />
        </div> */}

        <div
          style={{
            marginTop: "100px",
            marginLeft: "10%",
            width: "80%",
            height: "100%",
          }}
        >
          <Slide
            easing="ease"
            autoplay={false}
            indicators={true}
          // defaultIndex={3}
          >
            <div className="each-slide">
              <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={12}>
                  <Typography
                    className={classes.titleTemp}
                    component="h1"
                    variant="h2"
                    align="left"
                    gutterBottom
                  >
                    <Box fontWeight="fontWeightBold" m={1} textAlign="center">
                      Do you know ?
                    </Box>
                  </Typography>
                  <Typography
                    className={classes.subtitle2}
                    variant="h4"
                    align="left"
                    color="textSecondary"
                    paragraph
                  >
                    <p>
                      Fresh water is one of the most valuable resources to
                      human. Drought may dramatically influence the water
                      supply. People and properties in drought areas may be
                      threatened by the shortage of water supply. Play the video
                      on the right, which tells you the value of water. Please
                      save the water in your daily life so that people who are
                      affected by drought can be saved.
                    </p>
                  </Typography>
                </Grid>
                <Grid item xs={12}
                  style={{marginLeft:"10px",marginTop:"-150px"}}>
                  <iframe
                  className={classes.iframe}
                  width="80%"
                  height="600"
                  src="https://www.youtube.com/embed/SkAhB-8CtZg"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Grid>
              </Grid>
            </div>
          <div className="each-slide">
            <Viz Url="https://public.tableau.com/views/Water_15993858642510/Water_01_V1?:language=zh-Hans&:display_count=y&publish=yes&:origin=viz_share_link" />
          </div>

          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${test_Welcome})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "1000px",
              }}
            >
              <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <div className={classes.selectorGrid}>
                    <Typography
                      className={classes.titleTemp}
                      component="h4"
                      variant="h4"
                      align="left"
                      gutterBottom
                    >
                      <Box fontWeight="fontWeightBold" m={1}>
                        Test your water consumption
                        </Box>
                    </Typography>
                    <Typography
                      className={classes.subtitle3}
                      variant="h5"
                      component="h5"
                      align="left"
                      color="textSecondary"
                      paragraph
                    >
                      <p>See whether your family consumed too much water.</p>
                    </Typography>
                    {renderForm()}
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          </Slide>
        </div>
    </main>

      {/* card container */ }
      <Container className={classes.cardGrid} maxWidth="md">
        {/* grid container */}
        <Grid container spacing={4}></Grid>
      </Container>
      <TagTool></TagTool>
      <Footer></Footer>
    </>
  );
};
export default Intro;
