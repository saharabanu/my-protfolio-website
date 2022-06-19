import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-bg"  data-aos="fade-down-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
        <div id="about" className="container ">
            <h2 className="mb-3 text-danger fw-bold">About Me</h2>
                <div className="row">
                    <div className="col-md-5 col-12">
                        <div className="p-2">
                            
                            <ul>
                                <li className="about-list info fw-bold ">Personal Info</li>

                                <li className="about-list">Name : <span className="info">Sahara Banu</span></li>

                                <li className="about-list">Age: <span className="info">27+</span></li>

                                <li className="about-list">Phone : <span className="info">01752810246</span></li>
                                <li className="about-list">Email: <span className="info">saharabanungn@gmail.com</span></li>
                                {/* <li className="about-list">GitHub:  <span className="info">https://github.com/saharabanu</span></li> */}
                               
                                <li className="about-list">Qualification: <span className="info">Masters of Arts(English)</span></li>
                                <li className="about-list">Language: <span  className="info">Bangla,English</span></li>
                                <li className="about-list">Nationality:  <span  className="info">Bangladeshi</span> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        <div>
                        <h3>I am Sahara Banu</h3>
                        <p className="about-para">I am a junior MERN Stack developer with knowledge of different technologies and enough experience in creating and designing a super responsive website. And I also have good experience in creating SPA applications.You can reach out to me if you need any help in making a website for your business.</p>
                        <p className="about-para">I have  completed one month internship as a Reactjs Developer in Save Eco Organic Pvt. Ltd.I have also worked in a team for two months for creating a Multivendor E-commerce website.</p>

                        <p className="about-para">I have some project using HTMl,CSS,JavaScript,React.js,React Router,Redux,Node.js,Express.js,Firebase,Heroku And other technology.I have also used React Bootstrap,Material-UI,Tailwind.Css framework.I actively search out new technologies and keep up-to-date on business trends and advancements.</p>
                        <br />
                        <Link to='/skills'><button className="btn btn-danger rounded-pill px-3">About More</button></Link>
                        
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default About;