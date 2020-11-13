import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {Spring} from 'react-spring/renderprops'
import LandPageFooter from './landPageFooter';
import LandPageHeader from './landPageHeader';
import LandPageMain from './landPageMain'
import styles from './landPage.module.css'

function landPage() {
    return (
    <Router>
        <Spring
        from={{ opacity: 0, marginTop: -500}}
        to={{ opacity: 1, marginTop: 0}}
        >
            { props => (
                <div style={props}>
                    <div className={styles.container}>
                        <LandPageHeader />
                        <LandPageMain />
                        <LandPageFooter />
                     </div>
                </div>
                ) }
        </Spring>
        
    </Router>
    );
}

export default landPage