import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./errorMessage";
// import styles from "./form.module.css";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";

//component
import Api from "../api";

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
}));

export default function Form() {
  const classes = whatever();

  const listItems = ["VIC", "NSW", "QLD", "WA", "TSM", "SA", "NT", "ACT"];

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    axios({
      method: "post",
      url: "https://27gtcma2qg.execute-api.ap-southeast-2.amazonaws.com/test",
      data: JSON.stringify(data),
    })
      .then(function (response) {
        console.log(response);
        setData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [age, setAge] = React.useState("");

  const [data, setData] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
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
            component="h4"
            variant="h4"
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
              inputRef={register({ required: true, minLength: 2 })}
              value={age}
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
              {" "}
              <ErrorMessage error={errors.State} />
            </div>
          </FormControl>

          <Typography
            className={classes.selectorTitle}
            component="h4"
            variant="h4"
            align="left"
            gutterBottom
          >
            Water Consumption(ml):
          </Typography>
          <FormControl className={classes.formControl}>
            <TextField
              name="WaterConsum"
              inputRef={register({ required: true, minLength: 2 })}
            />
            <div className={classes.warning}>
              {" "}
              <ErrorMessage error={errors.WaterConsum} />
            </div>
          </FormControl>

          <Typography
            className={classes.selectorTitle}
            component="h4"
            variant="h4"
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
              inputRef={register({ required: true, minLength: 1 })}
              inputProps={{
                max: 9,
                min: 1,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div className={classes.warning}>
              {" "}
              <ErrorMessage error={errors.familySize} />
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
          >
            Check Result
          </Button>
        </form>
      </div>
    </div>
  );
}
