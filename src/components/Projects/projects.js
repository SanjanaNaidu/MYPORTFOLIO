import React from "react";
import './projects.css';
import Prediction from '../../assets/Prediction_abnormality.png';
import yelp from '../../assets/yelp_logo.png';
import Exploratory from '../../assets/zomato.jpg';
import energy from '../../assets/energy generation.jpg';

import Chatbot from '../../assets/stackoverflow.png';
import Hospital from '../../assets/hospitaldatabase.jpg';

import Cartoon from '../../assets/cartoonify.jpg';
import SinglePage from '../../assets/spaweb.jpg';
import social from '../../assets/snav.jpg';

const Projects = () => {
    return (
        <section id="projects" className="projects-container">
            <h2 className="ProjectTitle">Projects</h2>

            <div className="ProjectList">
            <img src={Prediction} alt="Prediction_ab" className='Pred' />
                <div className="ProjectDesc">
                    <h4>Prediction of Abnormality in Blood Pressure</h4>
                    <p>
                        This prediction model aims to build a machine learning model that can accurately predict abnormal blood<br/> pressure levels based on demographic and health-related features and model is analyzed to interpret <br/>
                        the feature importance and the contribution of each feature in predicting abnormal blood pressure levels.
                    </p>
                </div>
            </div>

            <div className="ProjectList">
            <img src={yelp} alt="yelpR" className='yelp' />

                <div className="ProjectDesc">
                    <h4>NLP Yelp Review</h4>
                    <p>
                        Developed a web application that assists users in selecting restaurants based on reviews' sentiments and ratings. <br/>The core focus of this project is to classify reviews into two categories: Positive and Negative sentiments, simplifying<br/>
                         the decision-making process for potential diners.
                    </p>
                </div>
            </div>

            <div className="ProjectList">
            <img src={Exploratory} alt="EDA_z" className='Zomato' />
                <div className="ProjectDesc">
                    <h4>Exploratory Data Analysis</h4>
                    <p>
                    The zomato exploratory data analysis is for the foodies to find the best restaurants,
                    value for money restaurants in their locality. It also helps to find their required 
                    cuisines in their locality. 
                    </p>
                </div>
            </div>
            <div className="ProjectList">
            <img src={energy} alt="Energy" className='energy-gen' />
                <div className="ProjectDesc">
                    <h4>Energy Generation Prediction</h4>
                    <p>
                    Analyzed US energy generation datasets to derive actionable insights from data to
                     drive data-driven decisions using AWS services as part of a big data project. Identified
                      renewable energy sources and predicted their generation using AWS resources (SageMaker, QuickSight).
                    </p>
                </div>
            </div>
            <div className="ProjectList">
            <img src={Chatbot} alt="Bot" className='Chatbot' />
                <div className="ProjectDesc">
                    <h4>Stackoverflow Assistant Chatbot</h4>
                    <p>
                    Designed a smart solution hosted on an Amazon EC2 instance that caters to programming-related queries,
                     seamlessly integrated with Telegram using Natural Language Processing (NLP) employing TF-idf for NLP tasks 
                     and leveraging ChatterBot alongside linear models for accurate StackOverflow tag predictions This project streamlines 
                    the process of seeking programming assistance, making it more accessible and user-friendly.
                    </p>
                </div>
            </div>
            <div className="ProjectList">
            <img src={Hospital} alt="HospitalData" className='HospitalDataManagement' />
                <div className="ProjectDesc">
                    <h4>Hospital Database Management System</h4>
                    <p>
                    Designed a robust and secure storage system for hospital data, providing an efficient and organized solution 
                    for managing critical healthcare information. This project is designed to enhance data accessibility, security, and
                    overall workflow efficiency within hospital environments.
                    </p>
                </div>
            </div>
            <div className="ProjectList">
            <img src={Cartoon} alt="Cartoonify" className='Cartoonify' />
                <div className="ProjectDesc">
                    <h4>Cartoonification System</h4>
                    <p>
                    An application that helps users upload an image and apply required filters by detecting
                     emotions. The frontend was built using HTML, CSS, jQuery, and the backend used ML 
                     and OpenCV, integrated using Flask.
                    </p>
                </div>
            </div>
            <div className="ProjectList">
            <img src={SinglePage} alt="Single" className='SinglePage' />
                <div className="ProjectDesc">
                    <h4>Single Page Web Application</h4>
                    <p>
                    Built a dynamic single-page web application that emulates a social media platform, allowing users to create, edit,
                     and delete posts. The application is built using the MEAN (MongoDB, Express.js, Angular, Node.js) stack,
                     providing a seamless and responsive user experience.
                    </p>
                </div>
            </div>
            <div className="ProjectList">
            <img src={social} alt="SNA" className='Social_net' />
                <div className="ProjectDesc">
                    <h4>Social Network Analysis and Visualization</h4>
                    <p>
                    A step-by-step procedure for analyzing and visualizing a social network dataset, including network
                     building, data preprocessing, and visualization using different layout techniques.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
