import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MainBottom from './landPageComponent/mainBottom';
import MainTop from './landPageComponent/mainTop';


  function LandPageMain() {
    return (
      <Router>
      <Switch>
          <Route>
              <MainTop />
              <MainBottom />
          </Route>
      </Switch>
  </Router>
        );
  }

  export default LandPageMain