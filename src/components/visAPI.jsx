import React, { Component } from "react";

class API extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initViz();
  }

  //Function call API
  initViz() {
    const vizUrl =
      "https://public.tableau.com/views/Run_COVID_19/Dashboard?:display_count=y&:origin=viz_share_link";
    const options = {
      height: "100vh",
      width: "100%",
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

export default API;
