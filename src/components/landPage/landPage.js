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
import styles from './landPage.module.css'

function landPage() {
    return (
    <Router>
        <div className={styles.container}>
            <LandPageHeader />
            <LandPageMain />
            <LandPageFooter />
        </div>
    </Router>
    );
}

export default landPage