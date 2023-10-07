import React from 'react'
import { useContext } from "react";
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { themeContext } from '../Context';
import { colors } from '@mui/material';
const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="footer" style={{ color: darkMode ? "white" : "" }}  >
   
    <div className="f-content">
     
      <div className="f-icons" >
      
        <InstagramIcon />
       
        <FacebookIcon />
       
        <GitHubIcon />
     
      </div>
      <span>   adeeakarachipakistan@gmail.com</span>
    </div>
  </div>
  )
}

export default Footer