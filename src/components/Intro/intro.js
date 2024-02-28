import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import React from "react";
import './intro.css';
import bg from '../../assets/IMG_4317-01Sanjana.jpeg';

//import resumePdf from '../../assets/your-resume.pdf'; // Replace 'your-resume.pdf' with the actual path to your resume PDF file
import { Link } from 'react-scroll';
library.add(faEnvelope, faFilePdf);

const Intro = () => {
    return (
        <section id="intro" className="intro-container">
            <div className="text-container">
                <div>
                    <span className="hello">Hello,</span>
                </div>
                <div>
                    <span className="IntroText">
                        I'm <span className="introName">Sanjana Naidu Gedela</span>
                        <br />Master's student in Computer Science| Seeking for Full Time opportunities May 2024|
                        Minor: Data Science & Information Privacy and Security
                    </span>
                </div>
                <Link to="hire-me-section" smooth={true} duration={500}>
                    
                </Link>
                <a href="https://drive.google.com/file/d/1KjxCJwqoV9tfuvSTCq6CEpEjjEHlIjQy/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-resume"> 
                        <FontAwesomeIcon icon={faFilePdf} className="icon" style={{ marginRight: '5px' }} />
                        Resume
                    </button>
                </a>
                <div className="social-icons">
                    <a href="https://github.com/SanjanaNaidu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/sanjananaidugedela/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    </a>
                    <a href="mailto:sanjanavenkat1998@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    </a>
                </div>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
