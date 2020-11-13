import React from 'react'
import styles from './headerContent.module.css'
import HeroImage from '../../../assets/Img Hero/Ic_ilustra_Hero.png'


function HeaderContent() {
    return (
        <div className={styles.headerContentConteiner}>
          <div className={styles.center}>
            <p className={styles.headerContentText}>Bienvenido a tu <br/><span className={styles.fontBold}>entrevista tecnica en</span><br/> <span className={styles.fontGreen}>WOLOX</span></p>
          </div>
          <div className={styles.center}>
            <img src={HeroImage} alt="hero-image" className={HeroImage}/>
          </div>
        </div>
        );
  }

export default HeaderContent