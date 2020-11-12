import React from 'react'
import styles from './headerContent.module.css'
import HeroImage from '../../../assets/Img Hero/Ic_ilustra_Hero.png'

function HeaderContent() {
    return (
        <div className={styles.headerContentConteiner}>
          <h2>Bienvenido a tu entrevista tecnica en WOLOX</h2>
          <img src={HeroImage} alt="hero-image"/>
        </div>
        );
  }

export default HeaderContent