import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import styles from './landPageMain.module.css'
import MainBottom from './landPageComponent/mainBottom';
import MainTop from './landPageComponent/mainTop';
import MainTopRight from './landPageComponent/mainTopRight';



  function LandPageMain() {
    return (
      <Router>
      <Switch>
          <Route>
              <div className={styles.MainContent}>
                <MainTop />
                <MainTopRight />
              </div>
              <div>
                <MainBottom />
              </div>
          </Route>
      </Switch>
  </Router>
        );
  }

  export default LandPageMain