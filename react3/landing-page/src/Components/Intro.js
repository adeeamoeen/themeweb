import React from 'react'
import { useContext } from 'react'
import'./Intro.css'
import  vector1 from '../img/vector2.webp'
import vector2 from '../img/v10.webp'
import profile from '../img/p1.webp'
import logo from '../img/react.png'
import logo1 from '../img/jss.png'
import { themeContext } from '../Context';

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Intro" id="Intro">
          <div className="i-left">
        <div className="i-name">  
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Adeea Moeen</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and UI/UX expert.
          </span>
        </div>
        <button className=" button i-button">Hire me</button>
        </div>
        <div className="i-right">
            <img src={vector1} alt=""/>
            <img src={vector2} alt=""/>
            <img src={profile} alt=""/>
            <img src={logo1} alt=""/>
            <img src={logo} alt=""/>
        </div>
        <div>
          
        </div>
    </div> 
 )
}

export default Intro
