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
//import styles from './landPage.module.css'

function landPage() {
    return (
    <Router>
        <Switch>
            <Route>
                <div>
                    <LandPageHeader />
                    <LandPageMain />
                    <LandPageFooter />
                </div>
            </Route>
        </Switch>
    </Router>
    );
}

export default landPage