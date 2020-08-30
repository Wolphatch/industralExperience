import React from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//assest
import p1 from "../asset/pic_userstory_1/picture1.png";
import p2 from "../asset/pic_userstory_1/picture2.jpg";
import p3 from "../asset/pic_userstory_1/picture3.jpg";
import p4 from "../asset/pic_userstory_1/picture4.png";
import p5 from "../asset/pic_userstory_1/picture5.png";
import p6 from "../asset/pic_userstory_1/picture6.png";
import p7 from "../asset/pic_userstory_1/picture7.png";
import p8 from "../asset/pic_userstory_1/picture8.png";

import { Link } from "react-router-dom";
import TagTool from '../components/TagTool';

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
  placeHolder: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
}));

const cards = [
  {
    headerText: "Meteorological drought",
    headerAvatar: "M",
    title: "Meteorological drought",
    subtitle:
      "In terms of its links to climate change, drought is best definedas meteorological drought",
    desciption:
      "which is ‘a prolonged, abnormally dry period when the amount of available water is insufficient to meet our normal use’ and is generally measured by assessing rainfall deficiencies over three or more months (BoM 2014c). meteorological drought: In the climate change part, drought means a long period with insufficient water to meet our normal use, this kind of phenomenon is called meteorological drought.",
    image: p1,
  },
  {
    headerText: "agricultural drought",
    headerAvatar: "A",
    title: "Agricultural drought",
    subtitle: "Different measure and defination ",
    desciption:
      "It is measured through deficits in soil moisture.Which indicate our soil becomes dry and lacks water.",
    image: p2,
  },
  {
    headerText: "hydrological drought",
    headerAvatar: "H",
    title: "Hydrological drought",
    subtitle:
      "It is based on anomalies in streamflow, lake and/or groundwater levels (IPCC 2012)",
    desciption: "Our streamflow, lake and groundwater become less than before.",
    image: p3,
  },
  {
    headerText: "Socioeconomic drought",
    headerAvatar: "S",
    title: "Socioeconomic drought",
    subtitle: "Effect of drought spread through the wider community",
    desciption: "Lack of water or increase desalination plants.",
    image: p4,
  },
  {
    headerText: "Health ",
    headerAvatar: "H",
    title: "Health",
    subtitle: "Both physical and mental will be affect",
    desciption:
      "Health including on nutrition, infectious diseases, on forest fires causing air pollution, and mental health problems, such as post-traumatic stress and suicidal behaviour. Physical health of elder people who live in the drought area has declined. Mental issues, especially for males such as farmers who aged 30-49 want to die in NSW because of drought.",
    image: p5,
  },
  {
    headerText: "Economic ",
    headerAvatar: "E",
    title: "Economic",
    subtitle:
      "Agriculture, tourism, employment and livelihoods in Australia have stuffed economic decline because of drought.",
    desciption:
      "For example, 1)  The Wimmera Southern Mallee region of Victoria experienced an 80 per cent reduction in grain production and a 40 per cent reduction in livestock production (BCG 2008). 2) It is estimated that between 2006 and 2009 the drought reduced national GDP by roughly 0.75 per cent(IPCC 2014). 3) By mid-2010 the Australian government had paid $4.4 billion in direct drought assistance to farmers. 4) For the tourism aspect, In the Murray River region, it is estimated that the drought caused an estimated $70 million loss because of reduced visitor days in 2008 (TRA 2010).",
    image: p6,
  },
  {
    headerText: "Ecosystems ",
    headerAvatar: "E",
    title: "Ecosystems",
    subtitle:
      "Australia’s natural environment has been influenced by drought significantly.",
    desciption:
      "For example: 1）drought has an impact on aquatic ecosystems, resulting in reduces of water supplies for providing suitable habitat, which causes reductions in the populations of many fish, plant and invertebrate species and, in some cases, contributing to local extinctions (Bond et al. 2008).  2) During the Millennium Drought, 57,000 ha of planted forests in Australia were lost. This is equivalent to the area of 28,500 cricket pitches(van Dijk et al. 2013). 3) Many thousands of plants and animals could be at risk if the rate of climate change continues since Australia trend to be warmer and have high probability become hotter (MacNally et al. 2009; Klamt et al. 2011; IPCC 2014; Climate Council 2014a).",
    image: p7,
  },
  {
    headerText: "Urban water supplies",
    headerAvatar: "U",
    title: "Urban water supplies",
    subtitle:
      "Water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.",
    desciption:
      "1) The flows into vital urban water catchments have been reduced by drought significantly(Melbourne Water 2013; Melbourne Water 2014). 2) Industries must obey the rules of water restrictions and the agriculture sector has fewer crops yields since lacking water(Grant et al. 2013; Melbourne Water 2014). 3) Rising demand for drinking water with insufficient rainfall has lead to increased restrictions on water(NSW Office of Water 2010). 4) A result of a project shows the average annual stream flows to Melbourne’s four major water harvesting storages may decrease by 7 per cent in 2020 and 18 per cent in 2050(Howe et al. 2005).",
    image: p8,
  },
];
let buttonStyle = {  
  BORDERRIGHT: '#7b9ebd 1px solid',
  PADDINGRIGHT: '2px',
  BORDERTOP:  '#7b9ebd 1px solid', 
  PADDINGLEFT: '2px', 
  FONTSIZE: '12px', 
  BORDERLEFT: '#7b9ebd 1px solid', 
  CURSOR: 'hand', 
  COLOR: 'black', 
  PADDINGTOP: '2px', 
  BORDERBOTTOM: '#7b9ebd 1px solid',
}
function Cause() {
  const classes = whatever();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mapCard = (cardGroup) => {
    const classes = whatever();

    let cardUI = [];

    cardGroup.map((card, key) => {
      cardUI.push(
        <Grid item id={key} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label={card.headerText} className={classes.avatar}>
                  {card.headerAvatar}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.headerText}
            />
            <CardMedia
              className={classes.cardMedia}
              image={card.image}
              title={card.title}
              onClick={handleExpandClick}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography>{card.subtitle}</Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{card.desciption}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
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
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Fact of drought in Australia
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              <p>Australia has a long history of drought.</p>
              <p> Drought is considered as a feature of Australia.</p>
              <p>
                Australia continent itself is the driest inhabited continent on
                Earth.
              </p>
              <p>
                Australias has the most variable rainfall and stream-flow on
                Earth.
              </p>

              <p>
                Hot extremes are becoming more frequent and intense (IPCC2014).
              </p>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Australia is the driest inhabited continent on Earth, with some of
              the world’s most variable rainfall and stream-flow (DFAT 2014).
              (bom.gov.au/climate/drought)
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}

        {/* card container */}
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* grid container */}
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                What is drought
              </Typography>
            </Container>
          </div>
          <Container className={classes.placeHolder} />
          <Grid container spacing={4}>
            {mapCard(cards.slice(0, 4))};
          </Grid>
          <Container className={classes.placeHolder} />

          {/* grid container */}
          <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Impact of drought
              </Typography>
            </Container>
          </div>
          <Container className={classes.placeHolder} />
          <Grid container spacing={4}>
            {mapCard(cards.slice(4, 8))};
          </Grid>
        </Container>
      
      </main>
      <TagTool></TagTool> 
      {/* <button style={buttonStyle}>
          <Link to={"/fact"}>
          Go Back   
          </Link>
        </button> */}
      <Footer />
    </>
  );
}

export default Cause;
