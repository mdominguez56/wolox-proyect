import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.css'
import LandPage from './components/landPage/landPage'
import Listpage from './components/listPage/listPage'
import Registerpage from './components/registerPage/registerPage'


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/listpage" component={Listpage} />
          <Route path="/registerpage" component={Registerpage} />
          <div className={styles.container}>
            <Route path="/" component={LandPage} />
          </div>
      </Switch>
    </Router>
  );
}

export default App;
