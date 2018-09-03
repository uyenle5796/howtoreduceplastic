import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Tip1 from './components/blogComponent/tip1';

//Includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />

          <Route exact path='/tip1' component={Tip1} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
