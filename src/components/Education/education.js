import React from "react";
import './education.css';
import uncc from '../../assets/UNCC.png';
import jntuk from '../../assets/JNTUK.png';

const Education = () => {
    return (
        <section id='education'>
            <div className="educationContainer">
                <h2 className="EducationTitle">Education</h2>

                <div className="Universitydetails">
                    <img src={uncc} alt="UNC" className='UNCC' />
                    <div className="educationText">
                        <h4>University of North Carolina, Charlotte</h4>
                        <p>Aug 2022 - May 2024</p>
                        <p>
                            <big>Master of Science</big> | <span style={{fontStyle:'italic',color:'GrayText'}}>Computer Science </span>
                            <br/>CGPA: 4/4
                        </p>
                        <big>Concentration: Data Science & Information Security and Privacy</big>
                        <p><span style={{ fontStyle: 'italic',color:'GrayText' }}>Relevant Coursework:</span></p>


                        <ul>
                            <li>Algorithms and Data Structures</li>
                            <li>Bigdata Analytics</li>
                            <li>Database Systems</li>
                            <li>Computer Networks</li>
                            <li>Object Oriented Programming</li>
                            <li>Visual Analytics</li>
                            <li>Software System Design and Implementation</li>
                            <li>Introduction to Operating Systems</li>
                            <li>Principles of Information Security and Privacy</li>
                            <li>Network Security</li>
                        </ul>
                    </div>
                </div>

                <div className="Universitydetails">
                    <img src={jntuk} alt="jntu" className='jntuk' />
                    <div className="educationText">
                        <h4>Jawaharlal Nehru Technological University, Kakinada</h4>
                        <p>Aug 2016 - Sept 2020</p>
                        <p>
                            <big>Bachelor of Technology</big> | <span style={{fontStyle:'italic',color:'GrayText'}}>Computer Science and Engineering</span>
                            <br/>CGPA:8.7/10
                        </p>
                        <p><span style={{ fontStyle: 'italic',color:'GrayText' }}>Relevant Coursework:</span></p>

                        <ul>
                            <li>Algorithms and Data Structures</li>
                            <li>Bigdata & Hadoop</li>
                            <li>Database Systems</li>
                            <li>Computer Networks</li>
                            <li>Object Oriented Programming</li>
                            <li>Principles of Programming languages</li>
                            <li>Software System Design and Implementation</li>
                            <li>Introduction to Operating Systems</li>
                        </ul>
                        <p><span style={{ fontStyle: 'italic',color:'GrayText' }}>ExtraCurricular Activities:</span></p>
                        <ul>
                            <li>Member of National Service Scheme</li>
                            <li>Orator in public meetings as a member of The CII</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
