import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React, { Component } from "react";
import Viz from "../Pages/viz";


class slideShow extends Component {
  render() {
    const mapURL = (urls) => {
      let urlGroup = [];

      urls.map((url, key) => {
        urlGroup.push(
          <div className="each-slide">
            <img
                  src={url}
                  alt="..."
                  style={{
                    marginTop: "100px",
                    marginLeft: "0",
                    width: "100%",
                    height: "100%",
                    }}
               />
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
          <Slide easing="ease" autoplay={false} indicators={true}>
            {mapURL(this.props.imagelist)}
          </Slide>
        </div>
      </>
    );
  }
}

export default slideShow;