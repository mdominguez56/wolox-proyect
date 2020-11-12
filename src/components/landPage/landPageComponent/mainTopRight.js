import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './mainTopRight.module.css'

function MainTopRight() {
    return (
        <div className={styles.mainTopRightContainer}>
          <h2>Trabajamos para convertir ideas en productos</h2>
        </div>
        );
  }

export default MainTopRight