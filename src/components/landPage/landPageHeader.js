import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import styles from './landPageHeader.module.css';
import HeaderTop from './landPageComponent/headerTop';
import HeaderContent from './landPageComponent/headerContent';


  function LandPageHeader() {
    return (
    <Router>
        <Switch>
            <Route>
                <div className={styles.backgroundHeader}>
                  <HeaderTop />
                  <HeaderContent />
                </div>
            </Route>
        </Switch>
    </Router>
        );
  }

  export default LandPageHeader