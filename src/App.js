import React from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

// pages
import Home from "./Pages/index";
import aboutUs from "./Pages/aboutUs";
import NotFoundPage from "./Pages/404";
import fact from "./Pages/fact";
import intro from "./Pages/Intro";
import cause from "./Pages/Cause";
import dataVis_evap from "./Pages/dataVis_evap";
import dataVis_Temp from "./Pages/dataVis_Temp";
import dataVis_Rainfall from "./Pages/dataVis_Rainfall";
import Chronology from "./Pages/Chronology";
import ScrollToTop from "./components/ScrollToTop";
import temp from "./Pages/temp";
import slideShow from "./Pages/slideShow";
import index from "./Pages/index";
import viz from "./Pages/viz";
function App() {
  return (
    <>
      <CssBaseLine />
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutUs" component={aboutUs} />
          <Route path="/fact" component={fact} />
          <Route path="/Intro" component={intro} />
          <Route path="/Cause" component={cause} />
          <Route path="/dataVis_evap" component={dataVis_evap} />
          <Route path="/dataVis_Temp" component={dataVis_Temp} />
          <Route path="/dataVis_Rainfall" component={dataVis_Rainfall} />
          <Route path="/Chronology" component={Chronology} />
          <Route path="/temp" component={temp} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route path="/slideShow" component={slideShow} />
          <Route path="/viz" component={viz} />
          <Redirect to="/404" />
        </Switch>
      </ScrollToTop>
    </>
  );
}

// import MainPage from "./Pages";
// import NotFoundPage from "./Pages/404";
// import aboutUs from "./Pages/aboutUs";
// import testPage from "./Pages/temp";

// class App extends Component {
//   render() {
//     return (
//       <CssBaseLine>
//         <Router>
//           <Switch>
//             <Route exact path="/" component={MainPage} />
//             <Route exact path="/aboutUs" component={aboutUs} />
//             <Route exact path="/testPage" component={testPage} />
//             <Route exact path="/404" component={NotFoundPage} />
//             <Redirect to="/404" />
//           </Switch>
//         </Router>
//       </CssBaseLine>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
