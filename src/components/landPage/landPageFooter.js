import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import styles from './landPageFooter.module.css'
  import WoloxLogo from '../../assets/Ic_Wolox_Footer.svg'


  function LandPageFooter() {
    return (
        <div className={styles.backgroundFooter}>
          <div>
            <h3>Gracias por <span className={styles.wordLightBlue}>completar el ejercicio</span></h3>
            <h4>Te invitamos a ver mas informacion</h4>
            <button className={styles.button}>Conocer mas</button>
          </div>
          <div>
            <img src={WoloxLogo} alt="wolox-logo" />
          </div>
          
        </div>
        );
  }

  export default LandPageFooter