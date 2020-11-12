import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HeaderTop from './landPageComponent/headerTop';
import HeaderContent from './landPageComponent/headerContent';


  function LandPageHeader() {
    return (
    <Router>
        <Switch>
            <Route>
                <HeaderTop />
                <HeaderContent />
            </Route>
        </Switch>
    </Router>
        );
  }

  export default LandPageHeader