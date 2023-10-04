import React from "react";
import './navbar.css'
import { Link } from 'react-scroll';
import contactImg from '../../assets/contactImg.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="" alt="" />
            <div className="desktopMenu">
                <Link to="intro" smooth={true} duration={500} className="desktopMenuListItem">Home</Link>
                <Link to="skills" smooth={true} duration={500} className="desktopMenuListItem">About Me</Link>
                <Link to="education" smooth={true} duration={500} className="desktopMenuListItem">Education</Link>
                <Link to="experience" smooth={true} duration={500} className="desktopMenuListItem">Experience</Link>
                <Link to="projects" smooth={true} duration={500} className="desktopMenuListItem">Projects</Link>
            </div>
            {/* Wrap the image and text in a div and use Link for smooth scrolling */}
            <div className="contact-me-link">
                <Link to="contactme" smooth={true} duration={500}>
                    <img src={contactImg} alt="Contact Me" className="desktopMenuImg" />
                    <span>Contact Me</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;

