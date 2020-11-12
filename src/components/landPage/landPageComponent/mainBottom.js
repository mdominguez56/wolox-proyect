import React from 'react'
import { Link } from 'react-router-dom'
import styles from './mainBottom.module.css'
import HourImage from '../../../assets/Ic_Hour.svg'
import HomeOffice from '../../../assets/Ic_HomeOffice.svg'
import Workshops from '../../../assets/Ic_Workshops.svg'
import Snacks from '../../../assets/Ic_DrinkSnacks.svg'
import RemoteWeek from '../../../assets/Ic_laptop.svg'
import Brain from '../../../assets/Ic_brain.svg'

function MainBottom() {
    return (
        <div>
          <h3>Entre los benificios que ofrecemos se encuentan </h3>
        <div className={styles.imgContainer}>
            <div>
              <img src={HourImage} alt="Hour" />
              <p>Flexibilidad horaria</p>
            </div>
            <div>
              <img src={HomeOffice} alt="Home-office" />
              <p>Home office</p>
            </div>
            <div>
              <img src={Workshops} alt="Workshops" />
              <p>Capacitaciones y workshops</p>
            </div>
            <div>
              <img src={Snacks} alt="Snacks" />
              <p>Snacks, frutas y bebidas gratis</p>
            </div>
            <div>
              <img src={RemoteWeek} alt="Romote" />
              <p>Semana remota</p>
            </div>
            <div>
              <img src={Brain} alt="Romote" />
              <p>Trabajar en las ultimas tecnologias</p>
            </div>
        </div>
        </div>
        );
}

export default MainBottom