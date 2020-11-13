import React from 'react';
import styles from '../landPage/landPageComponent/headerContent.module.css'
import HeroImage from '../../assets/Img Hero/Ic_ilustra_Hero.png'

function RegisterPage() {
  return (
    <div className={styles.headerContentConteiner}>
      <div className={styles.center}>
        <p className={styles.headerContentText}>Listado de aplicaciones <br/> en <span className={styles.fontGreen}>desarrollo</span></p>
      </div>
      <div className={styles.center}>
        <img src={HeroImage} alt="hero-image" className={HeroImage}/>
      </div>
    </div>
    );
  }
  
  export default RegisterPage;