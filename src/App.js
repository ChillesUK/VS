import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import WorldMarkets from './Components/WorldMarkets';
import About from './Components/About';
import Comparison from './Components/Comparison';
import PageNotFound from './Components/PageNotFound';
import Header from './Components/Header'
import './Components/styles.sass'

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

export default App;
