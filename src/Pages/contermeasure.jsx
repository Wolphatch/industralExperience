import React from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import { Zoom } from 'react-slideshow-image';

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SlideShow2 from "../components/slideshow2";

//assest
import Cp1 from "../asset/for children/picture14.png";
import Cp2 from "../asset/for children/picture15.png";
import Cp3 from "../asset/for children/picture16.png";
import Cp4 from "../asset/for children/picture17.png";
import Pp1 from "../asset/for parents/picture14.png";
import Pp2 from "../asset/for parents/picture15.png";
import Pp3 from "../asset/for parents/picture16.png";
import Pp4 from "../asset/for parents/picture17.png";
import background from "../asset/desert2.png";
import story from "../asset/countermeasure.png";
import TagTool from "../components/TagTool";
import colorBar1 from "../asset/colorBar4.png";
import colorBar2 from "../asset/colorBar5.png";
import colorBar3 from "../asset/colorBar1.png";
import colorBar4 from "../asset/colorBar6.png";
import tool1 from "../asset/for parents/Tool1.png";
import tool2 from "../asset/for parents/tool2.png";
import tool3 from "../asset/for parents/tool3.png";
import tool4 from "../asset/for parents/tool4.png";
import tool5 from "../asset/for parents/tool5.png";
import good from "../asset/good.png";

const whatever = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(25, 0, 25),
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
    height: 5,
    paddingTop: "56%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  grid1: {
    padding:theme.spacing(10,0,10),
  },
  headingContent: {
    padding: theme.spacing(10, 0, 6),
    color: "#071e3d",
},
titleStyle: {
  color: "#fdfdfd",
  fontSize: 80,
},
subtitleStyle: {
  color: "#fdfdfd",
},
}));

const imagelist = [tool1,tool2,tool3,tool4,tool5]

const cards = [
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title: "July: Tips1",
    desciption1:
      "1. make sure that taps are closed properly after each time we use it (eg. when you brush your teeth and face washing).",
    desciption2:"2. watering our garden early in the morning so less water evaporates.",
    desciption3:"3. Using high-efficiency appliances such as washing machines and dishwashers help reduce water consumption. Make sure every time you use them, they are full.",
    desciption4:"4.After we use water once, we can use it for another purpose, such as watering a plant, soaking pots and pans, adding it to a birdbath or using them to flush toilets.",
    image: Cp1,
    heading: "This is card 1",
  },
  {
    headerText: "Health ",
    headerAvatar: "H",
    title: "July: Tips2",
    subtitle: "Both physical and mental will be affect",
    desciption1:
      "1. collecting rainwater with a rain barrel. Use the rain barrel to water your garden instead of the garden hose.",
      desciption2:"2. Starting a compost pile for food waste, which means saving scraps to make them become plant food, instead of using garbage disposals which can waste a lot of water.",
      desciption3:"3. Using  low-flow toilets and ultra-low-flow showers to save water.",
      desciption4:"4. Planting native, drought-tolerant plants and being alert with weeds that compete with your plants for water.",
      image: Cp2,
  },
  {
    headerText: "Economic ",
    headerAvatar: "E",
    title: "July: Tips3",
    subtitle:
      "Agriculture, tourism, employment and livelihoods in Australia have stuffed economic decline because of drought.",
    desciption1:
      "1. Telling your parents that reduces your use of chemicals when cleaning your home and car and when fertilizing your lawn, and securely stores all chemicals to avoid spillage, which may pollute our groundwater.",
      desciption2:"2. IF your family has a lawn,  you just need about an inch of water each week during most of the year and don’t water more to save water.",
      desciption3:"3. When your parents plan to wash cars, tell them to use a nozzle on the hose to save water and use a commercial car wash that recycles water (this is optional since you need to purchase it).",
      desciption4:"",
      image: Cp3,
  },
  {
    headerText: "Ecosystems ",
    headerAvatar: "E",
    title: "July: Tips4",
    subtitle:
      "Australia’s natural environment has been influenced by drought significantly.",
    desciption1:
      "1. When you need water for something such as a clever flower, do it in several short sessions to allow time for the moisture to be absorbed and you can use total water less in this way.",
      desciption2:"2. Donate your private coffer to charity organizations or directly to those people who lack water. Contribute for the world and start your first step!",
      desciption3:"",
      desciption4:"",
      image: Cp4,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
      desciption1:
      "1. Avoid causing fires by an electrical fault. Let qualified electricians inspect electrical installations and identify and address any areas of concern.",
      desciption2:"2. Installing spark arrestors if your house is thatch buildings with Chimneys for avoiding fires.",
      desciption3:"3. Make sure to fit your urns and kettles with an automatic thermostat cut-off mechanism to prevent drying to fire.",
      desciption4:"4. Purchasing additional fire fighting equipment such as fire blankets to place at high risk areas, for example in the kitchen. ",
      image: Pp1,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips2",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
      desciption1:
      "1. Keep gutters and storm water drains clean.",
      desciption2:"2. ask help from the local government if public storm water drains are blocked.",
      desciption3:"3. install pool covers to limit the rate of evaporation in swimming pools if you don’t use them.",
      desciption4:"4. Ask the government to check the quality of automatic sprinkler systems in your community to avoid wasting water.",
    image: Pp2,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips3",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
      desciption1:
      "1. regularly inspect your plumbing fixtures, hoses, and washers. repairing leaks or dripping faucets immediately to prevent wasted water.",
      desciption2:"2. Monitoring the usage of our daily water and warning if this data exceeds the average use in the requirement or average usage in our community.",
      desciption3:"3. installing low-flow plumbing fixtures to save water.",
      desciption4:"",
    image: Pp3,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips4",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "1. Farmers can use some monitor specifics such as relative humidity, solar radiation, rainfall and wind speeds to make sure the best time for their crops to water as well as the period and the quantity of water. But it is costly, you can do it if you have enough money. ",
      desciption2:"2. Joining the volunteer work with organizations that dig wells and provide treatment systems for villages, cities and other areas that do not have access to clean water for drinking and bathing.",
      desciption3:"",
      desciption4:"",
      image: Pp4,
  },
];



function Countermeasure() {
  const classes = whatever();

  const Slideshow = () => {
    const images = [
      'tool1',
      'tool2',
      'tool3',
      'tool4',
      'tool5',
    ];
    
    const zoomInProperties = {
      indicators: true,
      scale: 1.4
    }
    return (
      <div>
        <Zoom {...zoomInProperties}>
          {images.map((each, index) => (
            <div key={index} style={{width: "100%"}}>
              <img style={{ objectFit: "cover", width: "100%" }} src={each} />
            </div>
          ))}
        </Zoom>
      </div>
    )
  }

  
  const mapCard = (cardGroup) => {
    const classes = whatever();

    let cardUI = [];

    cardGroup.map((card, key) => {
      cardUI.push(
        <>
        <div className={classes.headingContent} 
                     style={{
                        backgroundImage: `url(${colorBar3})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    >
                        <Container maxWidth="xl">
                            <Typography
                                className={classes.titleStyle}
                                component="h1"
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                            >
                                {card.title}
                            </Typography>                         
                        </Container>
                    </div>
        <Grid container spacing={3} className = {classes.grid1}>
          <Grid item xs={6} className={classes.grid}>
            <CardMedia className={classes.cardMedia} image={card.image} />
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            {/* <Typography gutterBottom variant="h2" component="h2">
              {card.title}
            </Typography> */}
            <Typography
              square="false"
              variant="h5"
              align="left"
              color="#071e3d"
              paragraph
            >
              {card.desciption1}
              </Typography>  
            <Typography
              square="false"
              variant="h5"
              align="left"
              color="#071e3d"
              paragraph
            >
              {card.desciption2}  
            </Typography>
            <Typography
              square="false"
              variant="h5"
              align="left"
              color="#071e3d"
              paragraph
            >
              {card.desciption3}
              </Typography>  
              <Typography
              square="false"
              variant="h5"
              align="left"
              color="#071e3d"
              paragraph
            >
              {card.desciption4}
              </Typography>   
          </Grid>
          <Container className={classes.placeHolder2} />
        </Grid>
        </>
      );
      return null;
    });
    return cardUI;
  };
  
  return (
    <>
      <Navbar />
      <main>
        {/* Hero unit */}
        <div
          className={classes.heroContent}
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container maxWidth="md">
            <Typography
              className={classes.titleStyle}
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              How to prevent drought
            </Typography>
            <Typography
              className={classes.subtitleStyle}
              component="h4"
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              <p>know what we can do to prevent drought</p>
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}

        {/* card container */}
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* grid container */}
          <div className={classes.headingContent}>
            <Container maxWidth="xl">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Countermeasures to defend drought
              </Typography>
              <Typography
                component="h4"
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                We have known some related information about drought, so what can we do to prevent drought? There are some tips for children including they can complete by themselves or with the help of their parents!! Let’s start from a little story!
              </Typography>
              <img
                  src={story}
                  alt="..."
                  style={{
                    marginTop: "100px",
                    marginLeft: "0",
                    width: "100%",
                    height: "100%",
                    }}
               />
            </Container>
          </div>
          <div className={classes.headingContent} 
                     style={{
                        backgroundImage: `url(${colorBar1})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    >
                        <Container maxWidth="xl">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                            >
                              What children can do by themselves!!
              </Typography>  
              <Typography
                component="h4"
                variant="h5"
                align="center"
                color="#c5e3f6"
                paragraph
              >
                I can do it by myself and I can do it with my cute friends!!
              </Typography>                       
                        </Container>
                    </div>

          <Container className={classes.placeHolder} />
          <Grid container spacing={1}>
            {mapCard(cards.slice(0,4))};
          </Grid>
          <Container className={classes.placeHolder} />

          <div className={classes.headingContent} 
                     style={{
                        backgroundImage: `url(${colorBar2})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    >
                        <Container maxWidth="xl">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                            >
                              What children need help with their parents can do!!!!
              </Typography> 
              <Typography
                component="h4"
                variant="h5"
                align="center"
                color="#071e3d"
                paragraph
              >
                Yeach, with my parents!
              </Typography>                        
                        </Container>
                    </div>

          <Container className={classes.placeHolder} />
          <Grid container spacing={1}>
            {mapCard(cards.slice(4,17))};
          </Grid>
          <Container className={classes.placeHolder} />
          </Container>

          <div className={classes.headingContent} 
                     style={{
                        backgroundImage: `url(${colorBar4})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    >
                        <Container maxWidth="xl">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                            >
                              What tools we can use!!!!
              </Typography> 
              <Typography
                component="h4"
                variant="h5"
                align="center"
                color="#071e3d"
                paragraph
              >
                we have go through the countermeasures,so look what simple tools we can use to prvent drought
              </Typography>                        
                        </Container>
                    </div>

          <SlideShow2 imagelist = {imagelist}/>
          <div className={classes.headingContent}>
              <img
                    src={good}
                    alt="..."
                    style={{
                       marginTop: "100px",
                       marginLeft: "0",
                       width: "100%",
                       height: "100%",
                         }}
                  />                       
           </div>
      </main>
      <TagTool></TagTool>
      <Footer />
    </>
      );
}

export default Countermeasure;