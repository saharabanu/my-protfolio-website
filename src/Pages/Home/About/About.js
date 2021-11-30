import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-bg">
        <div id="about" className="container ">
            <h2 className="mt-3">About Me</h2>
                <div className="row">
                    <div className="col-md-5 col-12">
                        <div className="p-2">
                            
                            <ul>
                                <li className="about-list info fw-bold ">Personal Info</li>

                                <li className="about-list">Name : <span className="info">Sahara Banu</span></li>

                                <li className="about-list">Age: <span className="info">27+</span></li>

                                <li className="about-list">Phone : <span className="info">01752810246</span></li>
                                <li className="about-list">Email: <span className="info">saharabanungn@gmail.com</span></li>
                                <li className="about-list">Qualification: <span className="info">Masters of Arts(English)</span></li>
                                <li className="about-list">Language: <span  className="info">Bangla,English</span></li>
                                <li className="about-list">Nationality:  <span  className="info">Bengali</span> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        <div>
                        <h3>I am Sahara Banu</h3>
                        <p className="p-5">I am a junior MERN Stack developer with knowledge of different technologies and enough experience in creating and designing a super responsive website. And I also have good experience in creating SPA applications. </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default About;