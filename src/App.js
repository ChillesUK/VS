import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import WorldMarkets from './Components/WorldMarkets/WorldMarkets';
import About from './Components/About/About';
import Comparison from './Components/Comparison/Comparison';
import PageNotFound from './Components/PageNotFound';
import Header from './Components/Header/Header'

class App extends Component {
  render() {

    return (

      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route path='/World-Markets' component={WorldMarkets} />
            <Route path='/About' component={About} />
            <Route path='/Compare-Stock-Brokers' component={Comparison} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// Issue with how to render these path='#myModal' bits. Why is there a # ?
// <Route path='#myModal' component={WhatsAppModal} />
// import { WhatsAppModal } from './Components/WhatsAppModal'

export default App;

/*
      <Router>
      <div>
      <Header />
        <Switch>
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route path='/World-Markets' component={WorldMarkets} />
        <Route path='/About' component={About} /> 
        <Route path='/Compare-Stock-Brokers' component={Comparison} />
        <Route component={PageNotFound} />
    
        </Switch>
        </div>
      </Router>
      */