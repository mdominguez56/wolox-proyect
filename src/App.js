import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandPage from './components/landPage/landPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route>
            <LandPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
