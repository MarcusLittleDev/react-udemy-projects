import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout";
import Portfolio from "./containers/Portfolio/Portfolio";
import Home from "./containers/Home/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
