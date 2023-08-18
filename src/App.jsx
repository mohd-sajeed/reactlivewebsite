import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import "./index.css";
import Footer from './Footer'

const App = () => {
  return (
    <>
      
      <BrowserRouter>
          <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
          </BrowserRouter>
     <Footer />
    </>
  );
};

export default App;
