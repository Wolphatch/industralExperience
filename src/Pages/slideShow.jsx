import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import a from '../asset/background2.jpg';
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import tableau from "tableau-api";
import Viz from '../Pages/viz';
const slideShow = () => {
  return (
    <>
      <div style={{
        marginTop: "100px",
        marginLeft: "10%",
        width: "80%",
        height: "100%",
      }}>
        <Slide easing="ease" autoplay={false}>
          <div className="each-slide">
            <Viz Url="https://public.tableau.com/views/Run_COVID_19/Dashboard?:display_count=y&:origin=viz_share_link"/>

            <span>Slide 1</span>
          </div>
          <div className="each-slide">
          <Viz Url="https://public.tableau.com/views/evop/Evap_02_V1?:language=zh-Hans&:display_count=y&:origin=viz_share_link"/>
              <span>Slide 2</span>
          </div>
          <div className="each-slide" >
            <div style={{
              backgroundImage: `url(${a})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "450px",
            }}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    </>
  )

};

export default slideShow;