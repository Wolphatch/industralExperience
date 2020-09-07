import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import tableau from "tableau-api";
import "react-slideshow-image/dist/styles.css";

const useStyles = (theme) => ({
  respContainer: {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "100px",
    height: "100vh",
    overflow: "hidden",
  },
  videoContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
});

class TableauViz extends Component {
  componentDidMount() {
    this.initViz();
  }

  //Function call API
  initViz() {
    const vizUrl = this.props.Url;
    const options = {
      height: "100vh",
      width: "100%",
      position: "center",
      hideTabs: false,
      hideToolbar: true,
    };
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options);
  }

  render() {
    return (
      <div
        ref={(div) => {
          this.vizContainer = div;
        }}
      />
    );
  }
}

export default withStyles(useStyles)(TableauViz);
