import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import PageNotFound from './Components/PageNotFound';
import Navigation from './Components/Navigation';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <div>
      <Navigation />
        <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/About' component={About} /> 
        <Route path='/Contact-Us' component={Contact} />
        <Route component={PageNotFound} />
        </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
