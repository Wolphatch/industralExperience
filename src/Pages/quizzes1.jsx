import React,{ useRef } from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
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
import { Next } from "react-bootstrap/esm/PageItem";

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
      padding: theme.spacing(10, 50, 0),
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
        padding: theme.spacing(0, 50, 0),
        color: "#000000",
        fontSize: 40,
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
  const [swiper, setSwiper] = React.useState(null);

  React.useEffect(() => {
    var mySwiper = document.querySelector(".swiper-container").swiper;
    setSwiper(mySwiper);
  }, []);

  let goNext = () => swiper.slideNext();
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
  
  const getQuizzes = () => {
    console.log("start receive");
    makeSuggestion();
    console.log(index);
    console.log(suggestion);

    axios({
      method: "post",
      url: "https://kv2t6suexk.execute-api.ap-southeast-2.amazonaws.com/test",
      data: suggestion,
    })
      .then(function (response) {
        console.log(response);
        const received = response.data.body;
        // console.log(received[0]);
        // console.log(received[0][1]);
        console.log(received.length);
        try{singleQ(received,received.length);}
        catch{};
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const [index, setIndex] = React.useState(randomInt(1, 6));
  const [suggestion, setSuggestion] = React.useState("{" + '"' + "quiz_id" + '"' + ":" +index + "}");
  const [quizzes, setquizzes] = React.useState("");
  const [quiz1, setquiz1] = React.useState([[,,,,,],[,,,,,],[,,,,,],[,,,,,]]);
  const [quiz2, setquiz2] = React.useState([[,,,,,],[,,,,,],[,,,,,],[,,,,,]]);
  const [quiz3, setquiz3] = React.useState([[,,,,,],[,,,,,],[,,,,,],[,,,,,]]);
  const [quiz4, setquiz4] = React.useState([[,,,,,],[,,,,,],[,,,,,],[,,,,,]]);
  const [quiz5, setquiz5] = React.useState([[,,,,,],[,,,,,],[,,,,,],[,,,,,]]);
  const [quiz6, setquiz6] = React.useState([[,,,,,],[,,,,,],[,,,,,],[,,,,,]]);
  const [quiz7, setquiz7] = React.useState([[,,,,,],[,,,,,],[,,,,,],[,,,,,]]);
  const [quiz8, setquiz8] = React.useState([[,,,,,],[,,,,,],[,,,,,],[,,,,,]]);
  const [quiz9, setquiz9] = React.useState([[,,,,,],[,,,,,],[,,,,,],[,,,,,]]);
  const [quiz10, setquiz10] = React.useState([[,,,,,],[,,,,,],[,,,,,],[,,,,,]]);
  const [qContent, setqContent] = React.useState("");

  const makeSuggestion = () =>{
    setIndex(() => randomInt(1, 6));
    setSuggestion(() => "{" + '"' + "quiz_id" + '"' + ":" +index + "}");
  };
  
  const clearquiz = () =>{
    setquiz1(() => [[]]);
    setquiz2(() => [[]]);
    setquiz3(() => [[]]);
    setquiz4(() => [[]]);
    setquiz5(() => [[]]);
    setquiz6(() => [[]]);
    setquiz7(() => [[]]);
    setquiz8(() => [[]]);
    setquiz9(() => [[]]);
    setquiz10(() => [[]]);
  }

  const singleQ = (quizzes,length)=>{
    var i = 1;
    var q1 = 0;
    var q2 = 0;
    var q3 = 0;
    var q4 = 0;
    var q5 = 0;
    var q6 = 0;
    var q7 = 0;
    var q8 = 0;
    var q9 = 0;
    var q10 = 0;
    for (i;i < length; i++)
    {
      if (quizzes[i-1][1] != quizzes[i][1])
      {
        q1 = i;
        console.log(quizzes.slice(0,q1));
        setquiz1(() => quizzes.slice(0,q1));
        i++;
        break;
      }
    }
    for (i;i < length; i++)
    {
      if (quizzes[i-1][1] != quizzes[i][1])
      {
        q2 = i;
        setquiz2(() => quizzes.slice(q1,q2));
        i++;
        break;
      }
    }
    for (i;i < length; i++)
    {
      if (quizzes[i-1][1] != quizzes[i][1])
      {
        q3 = i;
        setquiz3(() => quizzes.slice(q2,q3));
        i++;
        break;
      }
    }
    for (i;i < length; i++)
    {
      if (quizzes[i-1][1] != quizzes[i][1])
      {
        q4 = i;
        setquiz4(() => quizzes.slice(q3,q4));
        i++;
        break;
      }
    }
    for (i;i < length; i++)
    {
      if (quizzes[i-1][1] != quizzes[i][1])
      {
        q5 = i;
        setquiz5(() => quizzes.slice(q4,q5));
        i++;
        break;
      }
    }
    for (i;i < length; i++)
    {
      if (quizzes[i-1][1] != quizzes[i][1])
      {
        q6 = i;
        setquiz6(() => quizzes.slice(q5,q6));
        i++;
        break;
      }
    }
    for (i;i < length; i++)
    {
      if (quizzes[i-1][1] != quizzes[i][1])
      {
        q7 = i;
        setquiz7(() => quizzes.slice(q6,q7));
        i++;
        break;
      }
    }
    for (i;i < length; i++)
    {
      if (quizzes[i-1][1] != quizzes[i][1])
      {
        q8 = i;
        setquiz8(() => quizzes.slice(q7,q8));
        i++;
        break;
      }
    }
    for (i;i < length; i++)
    {
      if (quizzes[i-1][1] != quizzes[i][1])
      {
        q9 = i;
        setquiz9(() => quizzes.slice(q8,q9));
        i++;
        break;
      }
    }
    for (i;i < length; i++)
    {
      if (quizzes[i-1][1] != quizzes[i][1])
      {
        q10 = i;
        setquiz10(() => quizzes.slice(q9,q10));
        i++;
        break;
      }
    }
    if(q5 == 0 && 0 < q4 < i)
    {
      setquiz5(() => quizzes.slice(q4,length));
    }
    if(q9 == 0 && 0 < q8 < i)
    {
      setquiz9(() => quizzes.slice(q8,length));
    }
    if(q10 == 0 && 0 < q9 < i)
    {
      setquiz10(() => quizzes.slice(q9,length));
    }
  }
 
  const quizeContent = (quizze) =>{
    var content = "";
    for (var i = 0; i < quizze.length;i++)
    {
      content += quizze[i][3] + ". " + quizze[i][4] + "\n";
    }
    setqContent(() => content);
  }

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
               <Button variant="contained" color="secondary" onClick={() =>{getQuizzes();goNext()}} >
                start test
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
            >
              quiz 1
            </Typography>           
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              {quiz1[0][2]}
            </Typography>
            <Typography className={classes.titleStyle1} align="left">
              {quiz1[0][3]} {quiz1[0][4]}
            </Typography>
            <Typography className={classes.titleStyle3}>
              {quiz1[1][3]} {quiz1[1][4]}
            </Typography>
            <Box>
            {
              quiz1.length === 2? null :
              <Typography className={classes.titleStyle3}>
              {quiz1[2][3]} {quiz1[2][4]}
              </Typography>
            }           
            </Box>
            <Box>
            {
              quiz1.length === 4?
            <Typography className={classes.titleStyle3}>
              {quiz1[3][3]} {quiz1[3][4]}
            </Typography>
            : null
            }
            </Box>
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
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              {quiz2[0][2]}
            </Typography>
            <Typography className={classes.titleStyle1} align="left">
              {quiz2[0][3]} {quiz2[0][4]}
            </Typography>
            <Typography className={classes.titleStyle3}>
              {quiz2[1][3]} {quiz2[1][4]}
            </Typography>
            <Box>
            {
              quiz2.length === 2? null :
              <Typography className={classes.titleStyle3}>
              {quiz2[2][3]} {quiz2[2][4]}
              </Typography>
            }           
            </Box>
            <Box>
            {
              quiz2.length === 4?
            <Typography className={classes.titleStyle3}>
              {quiz2[3][3]} {quiz2[3][4]}
            </Typography>
            : null
            }
            </Box>
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
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              {quiz3[0][2]}
            </Typography>
            <Typography className={classes.titleStyle1} align="left">
              {quiz3[0][3]} {quiz3[0][4]}
            </Typography>
            <Typography className={classes.titleStyle3}>
              {quiz3[1][3]} {quiz3[1][4]}
            </Typography>
            <Box>
            {
              quiz3.length === 2? null :
              <Typography className={classes.titleStyle3}>
              {quiz3[2][3]} {quiz3[2][4]}
              </Typography>
            }           
            </Box>
            <Box>
            {
              quiz3.length === 4?
              <Typography className={classes.titleStyle3}>
               {quiz3[3][3]} {quiz3[3][4]}
              </Typography>
            : null
            }
            </Box>
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
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              {quiz4[0][2]}
            </Typography>
            <Typography className={classes.titleStyle1} align="left">
              {quiz4[0][3]} {quiz4[0][4]}
            </Typography>
            <Typography className={classes.titleStyle3}>
              {quiz4[1][3]} {quiz4[1][4]}
            </Typography>
            <Box>
            {
              quiz4.length === 2? null :
              <Typography className={classes.titleStyle3}>
              {quiz4[2][3]} {quiz4[2][4]}
              </Typography>
            }           
            </Box>
            <Box>
            {
              quiz4.length === 4?
            <Typography className={classes.titleStyle3}>
              {quiz4[3][3]} {quiz4[3][4]}
            </Typography>
            : null
            }
            </Box>
         </div>
        <Box>{quiz5.length === 0?null: 
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
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              {quiz5[0][2]}
            </Typography>
            <Typography className={classes.titleStyle1} align="left">
              {quiz5[0][3]} {quiz5[0][4]}
            </Typography>
            <Typography className={classes.titleStyle3}>
              {quiz5[1][3]} {quiz5[1][4]}
            </Typography>
            <Box>
            {
              quiz5.length === 2? null :
              <Typography className={classes.titleStyle3}>
              {quiz5[2][3]} {quiz5[2][4]}
              </Typography>
            }           
            </Box>
            <Box>
            {
              quiz5.length === 4?
            <Typography className={classes.titleStyle3}>
              {quiz5[3][3]} {quiz5[3][4]}
            </Typography>
            : null
            }
            </Box>
         </div>
        }</Box>
        <Box>{quiz6.length === 0?null:
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
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              {quiz6[0][2]}
            </Typography>
            <Typography className={classes.titleStyle1} align="left">
              {quiz6[0][3]} {quiz6[0][4]}
            </Typography>
            <Typography className={classes.titleStyle3}>
              {quiz6[1][3]} {quiz6[1][4]}
            </Typography>
            <Box>
            {
              quiz6.length === 2? null :
              <Typography className={classes.titleStyle3}>
              {quiz6[2][3]} {quiz6[2][4]}
              </Typography>
            }           
            </Box>
            <Box>
            {
              quiz6.length === 4?
            <Typography className={classes.titleStyle3}>
              {quiz6[3][3]} {quiz6[3][4]}
            </Typography>
            : null
            }
            </Box>
         </div>
        }</Box>
        <Box>{quiz7.length === 0?null: 
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
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              {quiz7[0][2]}
            </Typography>
            <Typography className={classes.titleStyle1} align="left">
              {quiz7[0][3]} {quiz7[0][4]}
            </Typography>
            <Typography className={classes.titleStyle3}>
              {quiz7[1][3]} {quiz7[1][4]}
            </Typography>
            <Box>
            {
              quiz7.length === 2? null :
              <Typography className={classes.titleStyle3}>
              {quiz7[2][3]} {quiz7[2][4]}
              </Typography>
            }           
            </Box>
            <Box>
            {
              quiz7.length === 4?
            <Typography className={classes.titleStyle3}>
              {quiz7[3][3]} {quiz7[3][4]}
            </Typography>
            : null
            }
            </Box>
         </div>
        }</Box>
        <Box>{quiz8.length === 0?null: 
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
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              {quiz8[0][2]}
            </Typography>
            <Typography className={classes.titleStyle1} align="left">
              {quiz8[0][3]} {quiz8[0][4]}
            </Typography>
            <Typography className={classes.titleStyle3}>
              {quiz8[1][3]} {quiz8[1][4]}
            </Typography>
            <Box>
            {
              quiz8.length === 2? null :
              <Typography className={classes.titleStyle3}>
              {quiz8[2][3]} {quiz8[2][4]}
              </Typography>
            }           
            </Box>
            <Box>
            {
              quiz8.length === 4?
            <Typography className={classes.titleStyle3}>
              {quiz8[3][3]} {quiz8[3][4]}
            </Typography>
            : null
            }
            </Box>
         </div>
        }</Box>
        <Box>{quiz9.length === 0?null:
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
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              {quiz9[0][2]}
            </Typography>
            <Typography className={classes.titleStyle1} align="left">
              {quiz9[0][3]} {quiz9[0][4]}
            </Typography>
            <Typography className={classes.titleStyle3}>
              {quiz9[1][3]} {quiz9[1][4]}
            </Typography>
            <Box>
            {
              quiz9.length === 2? null :
              <Typography className={classes.titleStyle3}>
              {quiz9[2][3]} {quiz9[2][4]}
              </Typography>
            }           
            </Box>
            <Box>
            {
              quiz9.length === 4?
            <Typography className={classes.titleStyle3}>
              {quiz9[3][3]} {quiz9[3][4]}
            </Typography>
            : null
            }
            </Box>
         </div>
         }</Box>
        <Box>{quiz10.length === 0?null:
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
            <Typography
              className={classes.titleStyle1}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
            >
              {quiz10[0][2]}
            </Typography>
            <Typography className={classes.titleStyle1} align="left">
              {quiz10[0][3]} {quiz10[0][4]}
            </Typography>
            <Typography className={classes.titleStyle3}>
              {quiz10[1][3]} {quiz10[1][4]}
            </Typography>
            <Box>
            {
              quiz10.length === 2? null :
              <Typography className={classes.titleStyle3}>
              {quiz10[2][3]} {quiz10[2][4]}
              </Typography>
            }           
            </Box>
            <Box>
            {
              quiz10.length === 4?
            <Typography className={classes.titleStyle3}>
              {quiz10[3][3]} {quiz10[3][4]}
            </Typography>
            : null
            }
            </Box> 
         </div>
         }</Box> 
       </Swiper>
       <TagTool></TagTool>
       <Footer />
      </main>
    </>
  )



}

export default Quizzes1;
