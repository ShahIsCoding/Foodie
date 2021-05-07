import React, { Component } from 'react';
import Menu from './MenuComponents';
import Home from './HomeComponent';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent';
import { Contact } from './ContactComponent';
import { DISHES } from '../shared/dishes';
import {Route,Redirect,Switch} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path ='/Home' component = {() => <Home />} />
          <Route path ='/Menu' component = {() => <Menu dishes={this.state.dishes} />} />
          <Route path ='/contactus' component ={() => <Contact />} />
          <Redirect path='/Home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;