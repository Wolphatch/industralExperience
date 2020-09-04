import { Link } from "react-router-dom";
import React from "react";

class TagTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeList: ["Intro", "Cause", "dataVis_1", "dataVis_2"],
      nowRoute: "",
    };
  }

  componentDidMount() {
    console.log(">>>>>>>>>>>>>", this.props.history);
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#fff",
          fontSize: "25px",
        }}
      >
        {}
        <Link to={"/fact"} style={{color:"Green",textDecorationLine: "initial", fontStyle: "italic"}}>
          Go Back To Home
          </Link>
      </div>
    );
  }
}

export default TagTool;
