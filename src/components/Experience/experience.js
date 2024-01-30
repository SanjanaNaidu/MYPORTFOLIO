/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import './experience.css';
import unclogo from '../../assets/unclogo.png';
import gradient from '../../assets/gradient.png';
import dxc from '../../assets/dxc.png';

const Experience = () => {
    return (
        <section id='experience'>
            <div className="experienceContainer">
                <h2 className="ExperienceTitle">Experience</h2>

                <div className="experienceList">
                    <img src={unclogo} alt="unclogo" className="experienceListImg" />
                    <div className="ExperienceDesc">
                        <h4>Graduate Teaching Assistant</h4>
                        <p>Jan 2023 - May 2024</p>
                        <p>
                            <ul>
                               <li>Working as Teaching assistant for data mining, Operating Systems and Networking courses.</li>
                            <br /> 
                            <li>Aiding professor's research on knowledge graphs with student data.</li>
                            <br /> 
                            <li>Grading and explaining concepts to a cohort of 120 students.</li>
                            </ul>
                        </p>
                        <ul>
                            {/* Add any additional details here */}
                        </ul>
                    </div>
                </div>

                <div className="experienceList">
                    <img src={gradient} alt="gradient" className="experienceListImg" />
                    <div className="ExperienceDesc">
                        <h4>Software Engineer Intern</h4>
                        <p>May 2023 - Aug 2023</p>
                        <p>
                            <ul>
                              <li>Collaborated with a team of 11 engineers to develop a gym-focused application.</li>
                              <br/>
                             <li>Engineered the platform using a tech stack that included HTML, CSS, React Native, 
                           JavaScript, Firebase, and Node.js.Designed the user interface and experience to 
                           enhance communication among gym users.</li>
                           <br/>
                           <li>Leveraged Firebase for real-time data management and synchronization,reducing data
                           latency by 50%.Implemented Node.js for server-side functionalities to support the 
                           application's core features.</li>
                           </ul>
                        </p>
                        <ul>
                            {/* Add any additional details here */}
                        </ul>
                    </div>
                </div>

                <div className="experienceList">
                    <img src={dxc} alt="dxc" className="experienceListImg" />
                    <div className="ExperienceDesc">
                        <h4>Software Engineer</h4>
                        <p>Aug 2020- July 2022</p>
                        <p>
                            <ul>
                             <li>Database Software Development, Migration, backup, Storage Management, performed recovery, quality testing, and scheduled deployment activities in SQL Servers.</li>
                            <br />
                            <li>Effectively managed database storage, resulting in 20% improvement in storage utilization and performance optimization.</li>
                            <br />
                            <li>Designed and maintained stored procedures and views, contributing to an estimated 40% of database code objects and optimizing query performance.</li>
                            <br />
                            <li>Worked with maintenance of production Database on RDS and built a schema and performed a test case to trigger deadlock and monitor its impact.</li>
                            <br />
                            <li>Automated incident management processes through UCMS, reducing incident resolution time by an estimated 20%, and consuming around 5% of responsibilities.</li>
                            </ul>
                        </p>
                        
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
