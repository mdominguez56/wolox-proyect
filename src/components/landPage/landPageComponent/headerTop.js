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
          <img src={logo} alt="wolox-logo" />
          <nav className={styles.navLink}>
            <Link to="/">Inicio</Link>
            <Link to="/">Beneficios</Link>
            <Link to="/">Login</Link>
          </nav>
        </div>
  );
}

export default HeaderTop