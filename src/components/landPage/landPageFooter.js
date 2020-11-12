import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import styles from './landPageFooter.module.css'


  function LandPageFooter() {
    return (
        <div className={styles.backgroundFooter}>LAND PAGE FOOTER</div>
        );
  }

  export default LandPageFooter