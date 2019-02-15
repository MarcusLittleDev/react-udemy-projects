import React, { Component } from 'react';

import './App.module.css';
import Layout from '../components/Layout/Layout'
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'

interface Props {}

interface State {}

class App extends Component<Props, State> {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
