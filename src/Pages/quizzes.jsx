import React,{ Component } from "react";
import {Redirect} from 'react-router-dom';

//package
// import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import { useForm } from "react-hook-form";
import { red } from "@material-ui/core/colors";
import { bounceIn } from "react-animations";
import { flash } from "react-animations";
import Radium, { StyleRoot } from "radium";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import{ useState } from 'react';

//components
import Navbar from "../components/Navbar";

//assest
import bg1 from "../asset/quizzes/bg1.png";
import bord1 from "../asset/quizzes/bord1.png";
import mask from "../asset/quizzes/eye-mask.png";
import unicorn from "../asset/quizzes/unicorn.png";


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
      padding: theme.spacing(8, 0, 2),
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
      color: "#fdfdfd",
      fontSize: 80,
      fontWeight: "bold",
    },
    titleStyle1: {
      color: "#000000",
      fontSize: 20,
      fontWeight: "bold",
    },
    titleStyle2: {
        color: "#000000",
        fontSize: 80,
        fontWeight: "bold",
      },
    subtitleStyle: {
      color: "#fdfdfd",
    },
    root: {
      flexGrow: 1,
    },
    rank: {
        display: 'flex',
    },
    quize:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center', 
    },
    start:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: theme.spacing(8),
    },
    textIn: {
        '& > *': {
          margin: theme.spacing(1),
          width: '30ch',
        },
      },
    }
    
    ));

const styles = {
    flash: {
      animation: "flash 3s infinite",
      animationName: Radium.keyframes(flash, "flash"),
      color:"#fdfdfd"
    },
    bounceIn: {
        animation: "flash 2s infinite",
        animationName: Radium.keyframes(bounceIn, "bounceIn"),
      },
};
const schema = yup.object().shape({
  State: yup.string().required(),
  WaterConsum: yup.number().positive().integer().required().lessThan(1000000),
  familySize: yup.number().required(),
  username: yup.string().required(),
});

function Quizzes() {
 const classes = whatever();

 const {
  register,
  handleSubmit,
  errors,
  setError,
  clearError,
  formState: { isSubmitting },
 } = useForm();
 
 const onSubmit1 = (request) => { 
  axios({
    method: 'post',
    url: 'https://gcpmvwhkm7.execute-api.ap-southeast-2.amazonaws.com/test',
    data: JSON.stringify(request),
    // headers: {"Access-Control-Allow-Origin": "*"}
  })
    .then(function (response) {
      console.log(response);
      const received = JSON.parse(response.data.body);
      console.log(received);
      setData(() => received);
      console.log(receivedData);
    })
    .catch(function (error) {
      console.log(error);
      console.log(request);
    });
    setFormSubmitted((formSubmitted) => true);
 };

 const [receivedData, setData] = React.useState("Received");
 const [formSubmitted, setFormSubmitted] = React.useState(false);

 const renderForm = () => {
  // console.log(check);
  if (formSubmitted === true && receivedData === true) {
    return inputForm1();
  } else if (formSubmitted === true && receivedData === false)
  {
    return  <Redirect to='/Cause'/>;
  } 
  else {
    return inputForm();
  }
 };

 const inputForm = () => {
  return (
   <div>
     <form onSubmit={handleSubmit(onSubmit1)}>
        <div className={classes.quize}>  
            <img
                src={mask}
                alt="..."
                style={{
                  position: "relative",
                  //   marginTop: "350px",
                  //   left: "48%",
                  width: "60px",
                  height: "60px",
                  color: "black",
                }}
                // onClick={() => scrollToRef(props.myRef)}
            />
           <FormControl className={classes.textIn}>
             <TextField id="standard-basic" 
             name="username"
             type="string"
             label="Enter your name" 
             inputRef={register({
                required: true,
                minLength: 1,
                maxLength:8,                
              })}
              />
              <div className={classes.warning}>
              {errors.username && <p>User name is required and less than 10 characters.</p>}  
              </div>
           </FormControl>
        </div> 
        <div className={classes.start}> 
         <Button variant="contained" color="secondary" disabled={isSubmitting} type="submit">
           Start test
         </Button>
        </div>
     </form>
   </div>  
  );
 };

 const inputForm1 = () => {
  return (
   <div>
     <form onSubmit={handleSubmit(onSubmit1)}>
        <div className={classes.quize}>  
            <img
                src={mask}
                alt="..."
                style={{
                  position: "relative",
                  //   marginTop: "350px",
                  //   left: "48%",
                  width: "60px",
                  height: "60px",
                  color: "black",
                }}
                // onClick={() => scrollToRef(props.myRef)}
            />
           <FormControl className={classes.textIn}>
             <TextField id="standard-basic" 
             name="username"
             type="string"
             label="Enter your name" 
             inputRef={register({
                required: true,
                minLength: 1,
                maxLength:8,                
              })}
              />
              <div className={classes.warning}>
              <p>This user name has been used, please change another one</p>
              {errors.username && <p>User name is required and less than 10 characters.</p>}  
              </div>
           </FormControl>
        </div> 
        <div className={classes.start}> 
         <Button variant="contained" color="secondary" disabled={isSubmitting} type="submit">
           Start test
         </Button>
        </div>
     </form>
   </div>  
  );
 };

 return (
   <>
      <Navbar/>
      <main>
      <div
      className={classes.heroContent}
      style={{
        width:"auto",
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      >
      <Grid container spacing={2}>
        <Grid item xs={5}>
         <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Quizzes
         </Typography>
         {renderForm()}
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={5}>
          <div
          className={classes.headingContent1}
          style={{
            // height:"50%",
            width:"auto",
            backgroundImage: `url(${bord1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          > 
            <div className={classes.rank}>   
            <StyleRoot>
            <div style={styles.bounceIn}> 
            <img
                src={unicorn}
                alt="..."
                style={{
                  position: "relative",
                  //   marginTop: "350px",
                  //   left: "48%",
                  width: "80px",
                  height: "80px",
                  color: "black",
                }}
                // onClick={() => scrollToRef(props.myRef)}
            />
            </div>
            </StyleRoot>         
            <Typography
              className={classes.titleStyle}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Rank!!!         
            </Typography>
            </div> 
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              1. Lucy
            </Typography>
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              2. jack
            </Typography>
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              3. Bob
            </Typography>
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              4. Mary
            </Typography>
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              5. David
            </Typography>
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              6. Rose
            </Typography>
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              7. Jack
            </Typography>
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              8. Kelly
            </Typography>
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              9. Mark
            </Typography>
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              10. Gary
            </Typography>
          </div>    
        </Grid>
      </Grid>
      </div>
      </main>
   </>
 );
}

export default Quizzes;