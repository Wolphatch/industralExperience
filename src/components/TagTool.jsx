import { Link } from "react-router-dom";
import React from 'react';
import { Route } from 'react-router-dom';

class TagTool extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        routeList: ['Intro','Cause','dataVis_1','dataVis_2'],
        nowRoute:'',
      }
    }
    
    componentDidMount(){
        
            console.log('>>>>>>>>>>>>>',this.props.history )
    }
    render() {
      return (
        <div style={{display:'flex',justifyContent:'space-around',background:'#fff',fontSize:'25px'}}>
            {
                
            }
         <Link to={'/fact'}>
            Go Back
         </Link>
        </div>
      )
    }
  }

  export default TagTool