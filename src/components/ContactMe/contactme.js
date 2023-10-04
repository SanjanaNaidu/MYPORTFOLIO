import React from 'react';
import './contactme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
    return (
        <section id="contactme">
            <div className="contact-info">
                <h2>Contact Me</h2>
                <p>Feel free to reach out through the following channels:</p>
                <div className="contact-details">
                    <div className="contact-item">
                        <a href = "tel:+19803170600">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <span>Phone: +1(980)-371-0600</span>
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href = "mailto:sgedela@uncc.edu">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <span>Email:sgedela@uncc.edu</span>
                        </a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                        <span>Twitter: <a href="https://twitter.com/sanju__27" target="_blank" rel="noopener noreferrer">@YourTwitterHandle</a></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
