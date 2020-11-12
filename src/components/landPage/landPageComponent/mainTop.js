import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './mainTop.module.css'

function MainTop() {
    return (
        <div className={styles.mainTopContainer}>
          <h2>350 + Woloxers</h2>
          <Link> @Wolox</Link>
          <button>Siguenos</button>
        </div>
        );
  }

export default MainTop