import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './headerTop.module.css'

function HeaderTop() {
    return (
        <div className={styles.container}>
          <img src='' alt="" />
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/">Beneficios</Link>
            <Link to="/">Login</Link>
          </nav>
        </div>
        
  );
}

export default HeaderTop