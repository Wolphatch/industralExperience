import React from "react";

//package
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";

//components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TagTool from "../components/TagTool";

//assest
import p5 from "../asset/pic_userstory_1/picture5.png";
import p6 from "../asset/pic_userstory_1/picture6.png";
import p7 from "../asset/pic_userstory_1/picture7.png";
import p8 from "../asset/pic_userstory_1/picture8.png";
import test from "../asset/desert2.png";
import impact from "../asset/impact.png";
import congradulations from "../asset/congradulations.png";
import colorBar from "../asset/colorBar1.png";

const whatever = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(25, 0, 16),
    },
    headingContent: {
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
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(2),
    },
    placeHolder2: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(0),
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
    },
    subtitleStyle: {
        color: "#fdfdfd",
    },
    subHeadingContent: {
        color: "#0e153a",
    },
    contextContent:{
        color: "#071e3d",
    }
}));

const cards = [   
    {
        headerText: "Economic ",
        headerAvatar: "E",
        title: "Economic",
        subtitle:
            "Join: The first part is economic. As you can see, agriculture, tourism, employment and livelihoods in Australia all have suffered economic decline because of drought.Here are some real historical events.",
        desciption:
            " 1)  The Wimmera Southern Mallee region of Victoria experienced an 80 per cent reduction in grain production and a 40 per cent reduction in livestock production (July: Yes, our sheeps become less!) (BCG 2008).",
        desciption2:"2) It is estimated that between 2006 and 2009 the drought reduced national GDP by roughly 0.75 per cent(IPCC 2014).",
        desciption3:"3) By mid-2010 the Australian government had paid $4.4 billion in direct drought assistance to farmers.",
        desciption4:"4) For the tourism aspect, In the Murray River region, it is estimated that the drought caused an estimated $70 million loss because of reduced visitor days in 2008 (TRA 2010).",
        image: p6,
    },
    {
        headerText: "Ecosystems ",
        headerAvatar: "E",
        title: "Ecosystems",
        subtitle:
            "Join: The second part is ecosystems. Australia’s natural environment has been influenced by drought significantly. Soil becomes dry and weather becomes hot, lt likes a bad cycle!Here are some examples.",
        desciption:
            " 1）drought has an impact on aquatic ecosystems, resulting in reduces of water supplies for providing suitable habitat, which causes reductions in the populations of many fish, plant and invertebrate species and, in some cases, contributing to local extinctions (Bond et al. 2008).",
        desciption2: "2) During the Millennium Drought, 57,000 ha of planted forests in Australia were lost. This is equivalent to the areaof 28,500 cricket pitches(van Dijk et al. 2013)",
        desciption3:"3)Many thousands of plants and animals could be at risk if the rate of climate change continues since Australia trend to be warmer and have high probability become hotter (MacNally et al. 2009; Klamt et al. 2011;IPCC 2014; Climate Council 2014a).",
        desciption4:"",
        image: p7,
    },
    {
        headerText: "Urban water supplies",
        headerAvatar: "U",
        title: "Urban water supplies",
        subtitle:
            "Join: The third part is urban water supplies, drink water becomes less because of drought.Besides, water scarcity in major cities, particularly Melbourne, Sydney and Perth, has been exacerbated by drought and remains an ongoing challenge.Here are some real historical events.",
        desciption:
            "1) The flows into vital urban water catchments have been reduced by drought significantly(Melbourne Water 2013; Melbourne Water 2014).",
        desciption2: "2) Industries must obey the rules of water restrictions and the agriculture sector has fewer crops yields since lacking water(Grant et al. 2013; Melbourne Water 2014).",
        desciption3:"3) Rising demand for drinking water with insufficient rainfall has led to increased restrictions on water(NSW Office of Water 2010).",
        desciption4:"4) A result of a project shows the average annual stream flows to Melbourne’s four major water harvesting storages may decrease by 7 per cent in 2020 and 18 per cent in 2050(Howe et al. 2005).",
        image: p8,
    },
    {
        headerText: "Health ",
        headerAvatar: "H",
        title: "Health",
        subtitle: "Join: Last but not least, drought can also impact our health!health including on nutrition, infectious diseases, on forest fires causing air pollution, and mental health problems, such as post-traumatic stress and suicidal behaviour. Here are some more details!",
        desciption:
            "1) Physical health of elder people who live in the drought area has declined in Australia.",
        desciption2: "2) Mental issues, especially for males such as farmers who aged 30-49 want to die in NSW because of drought(July: Oh no!! My father looks tired these days, maybe I should do something for him!)",
        desciption3:"",
        desciption4:"",
        image: p5,
    },
];
// let buttonStyle = {
//   BORDERRIGHT: "#7b9ebd 1px solid",
//   PADDINGRIGHT: "2px",
//   BORDERTOP: "#7b9ebd 1px solid",
//   PADDINGLEFT: "2px",
//   FONTSIZE: "12px",
//   BORDERLEFT: "#7b9ebd 1px solid",
//   CURSOR: "hand",
//   COLOR: "black",
//   PADDINGTOP: "2px",
//   BORDERBOTTOM: "#7b9ebd 1px solid",
// };
function Cause() {
    const classes = whatever();

    // const handleStrip = (props) => {
    //   return props % 2 == 0 ? 4 : 8;
    // };

    const mapCard = (cardGroup) => {
        const classes = whatever();

        let cardUI = [];

        cardGroup.map((card, key) => {
            cardUI.push(
                <>
                <div className={classes.headingContent} 
                     style={{
                        backgroundImage: `url(${colorBar})`,
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
                                {card.title}
                            </Typography>                         
                        </Container>
                    </div>
                <div className={classes.headingContent} 
                    //  style={{
                    //     backgroundImage: `url(${colorBar})`,
                    //     backgroundPosition: "center",
                    //     backgroundSize: "cover",
                    //     backgroundRepeat: "no-repeat",
                    // }}
                    >
                        <Container maxWidth="xl">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                            >
                                {card.title}
              </Typography> 
                            <Typography className = {classes.subHeadingContent}
                                component="h4"
                                variant="h5"
                                align="center"
                                color="textSecondary"
                                paragraph
                            >
                                {card.subtitle}
              </Typography>                         
                        </Container>
                    </div> 
                    
                <Grid container spacing={3}>
                    
                    <Grid item xs={6} className={classes.grid}>
                        <CardMedia className={classes.cardMedia} image={card.image} />
                    </Grid>
                    <Grid item xs={6} className={classes.grid}>
                        {/* <Typography
                            square="false"
                            variant="h5"
                            align="left"
                            color="textSecondary"
                            paragraph
                        >
                            {card.subtitle}
                        </Typography> */}
                        <Typography className = {classes.contextContent}
                            square="false"
                            variant="h5"
                            align="left"
                            color="textSecondary"
                            paragraph
                        >
                            {card.desciption}
                        </Typography>
                        <Typography className = {classes.contextContent}
                            square="false"
                            variant="h5"
                            align="left"
                            color="textSecondary"
                            paragraph
                        >
                            {card.desciption2}
                        </Typography>
                        <Typography className = {classes.contextContent}
                            square="false"
                            variant="h5"
                            align="left"
                            color="textSecondary"
                            paragraph
                        >
                            {card.desciption3}
                        </Typography>
                        <Typography className = {classes.contextContent}
                            square="false"
                            variant="h5"
                            align="left"
                            color="textSecondary"
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
                        backgroundImage: `url(${test})`,
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
                            Impact of drought in Australia
            </Typography>
                        <Typography
                            className={classes.subtitleStyle}
                            component="h4"
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            <p>Know what and how drought affect Australia</p>
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
                                Damage of drought
              </Typography>
                            <Typography className = {classes.subHeadingContent}
                                component="h4"
                                variant="h5"
                                align="center"
                                color="textSecondary"
                                paragraph
                            >
                                Do you think drought only make us lose soil for farming? No! Actullay ,
                                it has four feilds in generally! Let's go through July and Join's story!
              </Typography>
                            <img
                                src={impact}
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
                    <Container className={classes.placeHolder} />
                    <Grid container spacing={1}>
                        {mapCard(cards.slice(0, 4))};
          </Grid>
                    <Container className={classes.placeHolder} />
                    <img
                                src={congradulations}
                                alt="..."
                                style={{
                                    marginTop: "100px",
                                    marginLeft: "0",
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                  
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