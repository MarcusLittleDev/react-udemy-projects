import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.module.css';
import Layout from '../components/Layout/Layout'
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'
import Checkout from './Checkout/Checkout';
import Orders from './Orders/Orders';

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path='/orders' componetn={Orders} />
            <Route path="/" exact component={BurgerBuilder}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;
