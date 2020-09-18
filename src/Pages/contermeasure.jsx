import React, { useRef } from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import { Zoom } from "react-slideshow-image";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SlideShow2 from "../components/slideshow2";

//assest
import Cp1 from "../asset/for children/picture1.png";
import Cp2 from "../asset/for children/picture2.png";
import Cp3 from "../asset/for children/picture3.png";
import Cp4 from "../asset/for children/picture4.png";
import Cp5 from "../asset/for children/picture5.png";
import Cp6 from "../asset/for children/picture6.png";
import Cp7 from "../asset/for children/picture7.png";
import Cp8 from "../asset/for children/picture8.png";
import Cp9 from "../asset/for children/picture9.png";
import Cp10 from "../asset/for children/picture10.png";
import Cp11 from "../asset/for children/picture11.png";
import Cp12 from "../asset/for children/picture12.png";
import Cp13 from "../asset/for children/picture13.png";
import Pp1 from "../asset/for parents/picture1.png";
import Pp2 from "../asset/for parents/picture2.png";
import Pp3 from "../asset/for parents/picture3.png";
import Pp4 from "../asset/for parents/picture4.png";
import Pp5 from "../asset/for parents/picture5.png";
import Pp6 from "../asset/for parents/picture6.png";
import Pp7 from "../asset/for parents/picture7.png";
import Pp8 from "../asset/for parents/picture8.png";
import Pp9 from "../asset/for parents/picture9.png";
import Pp10 from "../asset/for parents/picture10.png";
import Pp11 from "../asset/for parents/picture11.png";
import Pp12 from "../asset/for parents/picture12.png";
import Pp13 from "../asset/for parents/picture13.png";
import background from "../asset/desert2.png";
import story from "../asset/countermeasure.png";
import TagTool from "../components/TagTool";
import colorBar2 from "../asset/colorBar5.png";
import colorBar3 from "../asset/colorBar1.png";
import colorBar4 from "../asset/colorBar6.png";
import tool1 from "../asset/for parents/Tool1.png";
import tool2 from "../asset/for parents/tool2.png";
import tool3 from "../asset/for parents/tool3.png";
import tool4 from "../asset/for parents/tool4.png";
import tool5 from "../asset/for parents/tool5.png";
import good from "../asset/good.png";
import self from "../asset/for children/friend.png";
import family from "../asset/for children/family.png";
import tools from "../asset/for children/tools.png";

const whatever = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(24, 0, 24),
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
    padding: theme.spacing(10, 0, 10),
  },
  headingContent: {
    padding: theme.spacing(10, 0, 10),
    color: "#333333",
  },
  titleStyle: {
    color: "#fdfdfd",
    fontSize: 80,
  },
  subtitleStyle: {
    color: "#fdfdfd",
  },
  // for button base
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 0,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "6px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    fontSize: 80,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },

  // card
  cardRoot: {
    maxWidth: 345,
  },
}));

const imagelist = [tool1, tool2, tool3, tool4, tool5];

const cards = [
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "make sure that taps are closed properly after each time we use it (eg. when you brush your teeth and face washing).",
    image: Cp1,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "watering our garden early in the morning so less water evaporates.",
    image: Cp2,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "Using high-efficiency appliances such as washing machines and dishwashers help reduce water consumption. Make sure every time you use them, they are full.",
    image: Cp3,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "After we use water once, we can use it for another purpose, such as watering a plant, soaking pots and pans, adding it to a birdbath or using them to flush toilets. ",
    image: Cp4,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "collecting rainwater with a rain barrel. Use the rain barrel to water your garden instead of the garden hose.",
    image: Cp5,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "Starting a compost pile for food waste, which means saving scraps to make them become plant food, instead of using garbage disposals which can waste a lot of water.",
    image: Cp6,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "Using  low-flow toilets and ultra-low-flow showers to save water.",
    image: Cp7,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "Planting native, drought-tolerant plants and being alert with weeds that compete with your plants for water.",
    image: Cp8,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "Telling your parents that reduces your use of chemicals when cleaning your home and car and when fertilizing your lawn, and securely stores all chemicals to avoid spillage, which may pollute our groundwater.",
    image: Cp9,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "When your parents plan to wash cars, tell them to use a nozzle on the hose to save water and use a commercial car wash that recycles water (this is optional since you need to purchase it).",
    image: Cp10,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "IF your family has a lawn,  you just need about an inch of water each week during most of the year and don’t water more to save water.",
    image: Cp11,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "When you need water for something such as a clever flower, do it in several short sessions to allow time for the moisture to be absorbed and you can use total water less in this way.",
    image: Cp12,
    heading: "This is card 1",
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title:
      "                                                         July: Tips1                                           ",
    desciption1:
      "Donate your private coffer to charity organizations or directly to those people who lack water. Contribute for the world and start your first step!",
    image: Cp13,
    heading: "This is card 1",
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "Avoid causing fires by an electrical fault. Let qualified electricians inspect electrical installations and identify and address any areas of concern.",
    image: Pp1,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "Installing spark arrestors if your house is that buildings with chimneys for avoiding fires.",
    image: Pp2,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "Make sure to fit your urns and kettles with an automatic thermostat cut-off mechanism to prevent drying to fire.",
    image: Pp3,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "Purchasing additional fire fighting equipment such as fire blankets to place at high risk areas, for example in the kitchen. ",
    image: Pp4,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1: "Keep gutters and storm water drains clean.",
    image: Pp5,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "ask help from the local government if public storm water drains are blocked.",
    image: Pp6,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "install pool covers to limit the rate of evaporation in swimming pools if you don’t use them.",
    image: Pp7,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "Ask the government to check the quality of automatic sprinkler systems in your community to avoid wasting water.",
    image: Pp8,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1: "installing low-flow plumbing fixtures to save water.",
    image: Pp9,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "regularly inspect your plumbing fixtures, hoses, and washers. repairing leaks or dripping faucets immediately to prevent wasted water.",
    image: Pp10,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips1",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "Monitoring the usage of our daily water and warning if this data exceeds the average use in the requirement or average usage in our community.",
    image: Pp11,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips2",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "Farmers can use some monitor specifics such as relative humidity, solar radiation, rainfall and wind speeds to make sure the best time for their crops to water as well as the period and the quantity of water. But it is costly, you can do it if you have enough money.",
    image: Pp12,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "July: Tips3",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption1:
      "Joining the volunteer work with organizations that dig wells and provide treatment systems for villages, cities and other areas that do not have access to clean water for drinking and bathing.",
    image: Pp13,
  },
];

function Countermeasure() {
  const classes = whatever();
  const Slideshow = () => {
    const images = ["tool1", "tool2", "tool3", "tool4", "tool5"];

    const zoomInProperties = {
      indicators: true,
      scale: 1.4,
    };
    return (
      <div>
        <Zoom {...zoomInProperties}>
          {images.map((each, index) => (
            <div key={index} style={{ width: "100%" }}>
              <img
                style={{ objectFit: "cover", width: "100%" }}
                src={each}
                alt="..."
              />
            </div>
          ))}
        </Zoom>
      </div>
    );
  };

  const scrollToRef = (part4) => window.scrollTo(0, part4.current.offsetTop);
  const part1 = useRef(null);
  const part2 = useRef(null);
  const part3 = useRef(null);

  const images = [
    {
      url: self,
      to: part1,
      title: "Do by ourselves",
      width: "33%",
    },
    {
      url: family,
      to: part2,
      title: "Do with parents",
      width: "34%",
    },
    {
      url: tools,
      to: part3,
      title: "Useful tools",
      width: "33%",
    },
  ];

  const mapCard = (cardGroup) => {
    const classes = whatever();

    let cardUI = [];

    cardGroup.map((card, key) => {
      cardUI.push(
        <>
          <Grid item id={key} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.image}
                title={card.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography>{card.desciption1}</Typography>
              </CardContent>
            </Card>
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

        <div className={classes.root}>
          {images.map((image) => (
            <ButtonBase
              focusRipple
              key={image.title}
              onClick={() => scrollToRef(image.to)}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          ))}
        </div>

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
                We have known some related information about drought, so what
                can we do to prevent drought? There are some tips for children
                including they can complete by themselves or with the help of
                their parents!! Let’s start from a little story!
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

          <div
            ref={part1}
            className={classes.headingContent}
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
                What children can do by themselves!!
              </Typography>
              <Typography
                component="h4"
                variant="h5"
                align="center"
                color="#c5e3f6"
                paragraph
              >
                I can do it by myself and I can do it with my friends!!
              </Typography>
            </Container>
          </div>

          <div
            className={classes.headingContent}
            style={{
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
              ></Typography>
            </Container>
          </div>

          <Container className={classes.placeHolder} />
          <Grid container spacing={4}>
            {mapCard(cards.slice(0, 13))};
          </Grid>
          <Container className={classes.placeHolder} />

          <div
            className={classes.headingContent}
            style={{
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
              ></Typography>
            </Container>
          </div>

          <div
            ref={part2}
            className={classes.headingContent}
            style={{
              backgroundImage: `url(${colorBar3})`,
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

          <div
            className={classes.headingContent}
            style={{
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
              ></Typography>
            </Container>
          </div>

          <Container className={classes.placeHolder} />
          <Grid container spacing={4}>
            {mapCard(cards.slice(13, 26))};
          </Grid>
          <Container className={classes.placeHolder} />
        </Container>

        <div
          ref={part3}
          className={classes.headingContent}
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
              color="linear-gradient(to right, rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255))"
              gutterBottom
            >
              What tools we can use!!!!
            </Typography>
            <Typography
              component="h4"
              variant="h5"
              align="center"
              color="linear-gradient(to right, rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255))"
              paragraph
            >
              we have go through the countermeasures,so look what simple tools
              we can use to prvent drought
            </Typography>
          </Container>
        </div>

        <SlideShow2 imagelist={imagelist} />
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
