import React from "react";
import { useContext } from "react";
import Toggle from '../Components/Toggle';
import "./Navbar.css";
import { themeContext } from '../Context';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import DownloadingIcon from '@mui/icons-material/Downloading';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="n-wrapper" id="Navbar">
            {/* left */}
            <div className="n-left">
                <div className="n-name" style={{ color: darkMode ? "white" : "" }}>ADEEA</div>
                <Toggle />
            </div>
            {/* right */}
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ color: darkMode ? "white" : "" }} >
                        <li style={{ listStyleType: "none" }}>

                            <ViewCompactIcon /> components

                        </li>
                        <li style={{ listStyleType: "none" }}>
                            <BrowserUpdatedIcon />
                            UpGradesToPro

                        </li>

                        <li style={{ listStyleType: "none" }}>
                            <DownloadingIcon />
                            Download

                        </li>

                    </ul>
                </div>
                <div className="n-icon">
                    <a href="https://www.twitter.com/">
                        <TwitterIcon style={{ color: darkMode ? "white" : "" }} /></a>
                    <a href="https://www.instagram.com/">
                        <InstagramIcon style={{ color: darkMode ? "white" : "" }} /></a>
                    <a href="https://www.facebook.com/">
                        <FacebookIcon style={{ color: darkMode ? "white" : "" }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;