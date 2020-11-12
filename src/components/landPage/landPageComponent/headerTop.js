import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function HeaderTop() {
    return (
        <div>
          <img src="../../../assets/assets/logo_full_color.svg" alt="wolox-logo" />
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/">Beneficios</Link>
            <Link to="/">Login</Link>
          </nav>
        </div>
        
  );
}

export default HeaderTop