import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
