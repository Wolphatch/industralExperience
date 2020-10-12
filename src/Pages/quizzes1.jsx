import React,{ useRef } from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import Button from '@material-ui/core/Button';
import { bounceIn } from "react-animations";
import { flash } from "react-animations";
import Radium, { StyleRoot } from "radium";
import FormControl from "@material-ui/core/FormControl";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";

//components
import Navbar from "../components/Navbar";
import TagTool from "../components/TagTool";
import Footer from "../components/Footer";
import Swiper from 'react-id-swiper';

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
import bg2 from "../asset/quizzes/bg2.png";

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
        paddingTop: theme.spacing(35),
    },
    textIn: {
        '& > *': {
          margin: theme.spacing(1),
          width: '30ch',
        },
      },
    }
    
    ));

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
          color:"#fdfdfd"
        },
        bounceIn: {
            animation: "flash 2s infinite",
            animationName: Radium.keyframes(bounceIn, "bounceIn"),
          },
    };

function Quizzes1(){
  const classes = whatever();
  const pageSwiperProp = {
    // direction: "flex",
    // slidesPerView: 1,
    // spaceBetween: 30,
    // mousewheel: true,
    // autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30
  };
  const pageStyle = {
    height: "1010px",
  };


  return (
    <>
      <main>
      
       <Swiper {...pageSwiperProp}>
         <div>
         <div
          className={classes.heroContent}
          style={{
          width:"auto",
          height: "300px",
          backgroundImage: `url(${bg2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
         }}
         >
           <div className={classes.start}>
            <StyleRoot>
             <div style={styles.flash}>
               <Button variant="contained" color="secondary">
               click right arrow to start test
               </Button>
             </div>
            </StyleRoot> 
           </div>
         </div>
         </div>
         <div>            
            <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              quiz 1
            </Typography>
         </div>
         <div>
            <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              quiz 2
            </Typography>
         </div>
         <div>
            <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              quiz 3
            </Typography>
         </div>
         <div>
            <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              quiz 4
            </Typography>
         </div>
         <div>
            <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              quiz 5
            </Typography>
         </div>
         <div>
            <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              quiz 6
            </Typography>
         </div>
         <div>
            <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              quiz 7
            </Typography>
         </div>
         <div>
            <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              quiz 8
            </Typography>
         </div>
         <div>
            <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              quiz 9
            </Typography>
         </div>
         <div>
            <Typography
              className={classes.titleStyle2}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              quiz 10
            </Typography>
         </div>
       </Swiper>
       <TagTool></TagTool>
       <Footer />
      </main>
    </>
  )



}

export default Quizzes1;
