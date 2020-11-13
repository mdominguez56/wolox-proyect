import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './headerTop.module.css'
import logo from '../../../assets/logo_full_color.svg'
import Listpage from '../../listPage/listPage'


function HeaderTop() {
    return (
        <Router>
          <Switch>
            <div className={styles.container}>
              <img src={logo} alt="wolox-logo" className={styles.logoWolox}/>
              <nav className={styles.navLink}>
                <Link to="/" exact>Inicio</Link>
                <Link to="/" exact>Beneficios</Link>
                <Route>
                  <Link exact to="/listpage" render={() => <Listpage />} >
                    <button className={styles.button}>Login</button>
                  </Link> 
                </Route>
              </nav>
            </div>  
          </Switch>
        </Router>
  );
}

export default HeaderTop