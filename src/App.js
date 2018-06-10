import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';//make router
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import TopPage from './components/TopPage/TopPage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
