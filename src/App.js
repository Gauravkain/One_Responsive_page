import React from 'react'
import Navbar from './component/Navbar';
import { Switch, Route } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Gaurav kain Home page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Gaurav kain About page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Gaurav kain Service page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Gaurav kain Contact page</h1>
      </section>
    </>
  );
};


const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/service">
        <Service />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

    </Switch>
  )
};

export default App;
