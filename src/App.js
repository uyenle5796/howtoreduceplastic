import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HashRouter, Route, Switch } from "react-router-dom";
import "./Assets/css/default.min.css";

//Components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import HomePage from "./components/pages/homePage";
import About from "./components/pages/about";

//Blog posts
import Tip1 from "./components/blogComponent/blogContent/tip1";
import Tip2 from "./components/blogComponent/blogContent/tip2";
import Tip3 from "./components/blogComponent/blogContent/tip3";
import Tip4 from "./components/blogComponent/blogContent/tip4";
import Tip5 from "./components/blogComponent/blogContent/tip5";
import Tip6 from "./components/blogComponent/blogContent/tip6";
import Tip7 from "./components/blogComponent/blogContent/tip7";
import Tip8 from "./components/blogComponent/blogContent/tip8";
import Tip9 from "./components/blogComponent/blogContent/tip9";
import Tip10 from "./components/blogComponent/blogContent/tip10";
import Tip11 from "./components/blogComponent/blogContent/tip11";
import Tip12 from "./components/blogComponent/blogContent/tip12";
import Tip13 from "./components/blogComponent/blogContent/tip13";
import Tip14 from "./components/blogComponent/blogContent/tip14";
import Tip15 from "./components/blogComponent/blogContent/tip15";

class App extends Component {
  render() {
    return (
      <Router basename={window.location.pathname || ""}>
        {/* <HashRouter basename="/howtoreduceplastic"> */}
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/howtoreduceplastic/" component={HomePage} />
            <Route exact path="/howtoreduceplastic/about" component={About} />
            <Route path="/howtoreduceplastic/tip1" component={Tip1} />
            <Route path="/howtoreduceplastic/tip2" component={Tip2} />
            <Route path="/howtoreduceplastic/tip3" component={Tip3} />
            <Route path="/howtoreduceplastic/tip4" component={Tip4} />
            <Route path="/howtoreduceplastic/tip5" component={Tip5} />
            <Route path="/howtoreduceplastic/tip6" component={Tip6} />
            <Route path="/howtoreduceplastic/tip7" component={Tip7} />
            <Route path="/howtoreduceplastic/tip8" component={Tip8} />
            <Route path="/howtoreduceplastic/tip9" component={Tip9} />
            <Route path="/howtoreduceplastic/tip10" component={Tip10} />
            <Route path="/howtoreduceplastic/tip11" component={Tip11} />
            <Route path="/howtoreduceplastic/tip12" component={Tip12} />
            <Route path="/howtoreduceplastic/tip13" component={Tip13} />
            <Route path="/howtoreduceplastic/tip14" component={Tip14} />
            <Route path="/howtoreduceplastic/tip15" component={Tip15} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
