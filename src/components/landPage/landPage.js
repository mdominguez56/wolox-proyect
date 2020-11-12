import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LandPageFooter from './landPageFooter';
import LandPageHeader from './landPageHeader';
import LandPageMain from './landPageMain'





function landPage() {
    return (
    <Router>
        <Switch>
            <Route>
                <LandPageHeader />
                <LandPageMain />
                <LandPageFooter />
            </Route>
        </Switch>
    </Router>
    );
}

export default landPage