import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import a from "../asset/background2.jpg";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import tableau from "tableau-api";
import Viz from "../Pages/viz";

// const vizURLs = [
//   "https://public.tableau.com/views/evop/Evap_01_V1?:language=zh-Hans&:display_count=y&:origin=viz_share_link",
//   "https://public.tableau.com/views/evop/Evap_02_V1?:language=zh-Hans&:display_count=y&:origin=viz_share_link",
//   "https://public.tableau.com/views/evop/Evap_03_V1?:language=zh-Hans&:display_count=y&:origin=viz_share_link",
// ];

class slideShow extends Component {
  render() {
    const mapURL = (urls) => {
      let urlGroup = [];

      urls.map((url, key) => {
        urlGroup.push(
          <div className="each-slide">
            <Viz Url={url} />
            <span>Slide {key}</span>
          </div>
        );
        return null;
      });
      return urlGroup;
    };

    return (
      <>
        <div
          style={{
            marginTop: "100px",
            marginLeft: "10%",
            width: "80%",
            height: "100%",
          }}
        >
          <Slide easing="ease" autoplay={false}>
            {mapURL(this.props.URLS)}
          </Slide>
        </div>
      </>
    );
  }
}

export default slideShow;
