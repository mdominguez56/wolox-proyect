import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.css'
import LandPage from './components/landPage/landPage'

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <LandPage />
      </div>
    </Router>
  );
}

export default App;
