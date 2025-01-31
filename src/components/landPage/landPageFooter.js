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
            <Link to='https://www.wolox.com.ar/'>
              <button className={styles.button}>Conocer mas</button>
            </Link>
          </div>
          <div>
            <img src={WoloxLogo} alt="wolox-logo" className={styles.woloxLogo} />
          </div>
          
        </div>
        );
  }

  export default LandPageFooter