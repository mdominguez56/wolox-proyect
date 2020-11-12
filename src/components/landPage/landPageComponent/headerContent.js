import React from 'react'
import styles from './headerContent.module.css'

function HeaderContent() {
    return (
        <div className={styles.headerContentConteiner}>
          <h2>Bienvenido a tu entrevista tecnica en WOLOX</h2>
          <img src="../../../assets/assets/ImgHero/Ic_ilustra_Hero.png" alt="Header-Image" />
        </div>
        );
  }

export default HeaderContent