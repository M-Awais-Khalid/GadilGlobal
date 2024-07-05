import React from 'react'
import Styles from './HeroSection.module.css';
import MSO from '../../Assets/mso.png'
import NodeLogo from '../../Assets/node.png' 
import logoReact from '../../Assets/react.png'
import Angular from '../../Assets/angular.png'
import Sharp from '../../Assets/csharp.png'

const HeroSection = () => { 
  return (
    <div className={Styles.HeroSection}>
    <div className={Styles.container}>
    <div>
      <span className={Styles.text1}> Guard Fuel Filter</span>
      <span className={Styles.text2}> Top Rated Product</span>
      <span className={Styles.text3}> In automobile industry higly recommened for your vehicle </span>
      </div>
      <div className={Styles.pictures}>
      <div className={Styles.icon}> <img src={MSO}  alt="" />   
      </div>  
      <div className={Styles.icon}> <img src={NodeLogo}  alt="" />   
      </div> 
      <div className={Styles.icon}> <img src={Sharp}  alt="" />   
      </div> 
      <div className={Styles.icon}> <img src={logoReact}  alt="" />   
      </div>
      <div className={Styles.icon}> <img src={Angular}  alt="" />   
      </div>
      </div> 
    </div>

    </div>
  )
}

export default HeroSection