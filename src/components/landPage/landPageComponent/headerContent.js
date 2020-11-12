import React from 'react'
import styles from './headerContent.module.css'
import HeroImage from '../../../assets/Img Hero/Ic_ilustra_Hero.png'


function HeaderContent() {
    return (
        <div className={styles.headerContentConteiner}>
          <h2 className={styles.headerContentText}>Bienvenido a tu <br/> entrevista tecnica en <br/> WOLOX</h2>
          <img src={HeroImage} alt="hero-image" className={HeroImage}/>
        </div>
        );
  }

export default HeaderContent