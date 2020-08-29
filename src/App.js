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

function App() {
  return (
    <>
      <CssBaseLine />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutUs" component={aboutUs} />
        <Route path="/fact" component={fact} />
        <Route path="/Intro" component={intro} />
        <Route path="/Cause" component={cause} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
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
