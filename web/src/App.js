import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./screens/Home";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route component={Home} path='/' exact />
          {/* <Route component={Map} path='/map' />
          <Route component={Services} path='/services' /> */}
          {/* <Route component={Home} /> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
