import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './mainTop.module.css'
import twIcon from '../../../assets/twIcon.png'

function MainTop() {
    return (
        <div className={styles.mainTopContainer}>
          <h2><span className={styles.fontGreen}>350 +</span><span className={styles.fontLightBlue}> Woloxers</span></h2>
          <div>
            <div className={styles.displayFlex}>
              <img src={twIcon} alt="tw-icon" />
              <p>©Wolox</p>
            </div>
            <Link><button className={styles.button}>Siguenos</button></Link>
          </div>
        </div>
        );
  }

export default MainTop