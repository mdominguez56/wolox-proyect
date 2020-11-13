import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './headerTop.module.css'
import logo from '../../../assets/logo_full_color.svg'

function HeaderTop() {
    return (
        <div className={styles.container}>
          <img src={logo} alt="wolox-logo" className={styles.logoWolox}/>
          <nav className={styles.navLink}>
            <Link to="/">Inicio</Link>
            <Link to="/">Beneficios</Link>
            <Link to="/" >
              <button className={styles.button}>Login</button>
            </Link> 
          </nav>
        </div>
  );
}

export default HeaderTop