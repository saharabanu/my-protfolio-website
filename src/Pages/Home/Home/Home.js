import React from 'react';
import Services from '../../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import './Home.css';

const Home = () => {
    return (
        
        <div id="home" className="wrapper">
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Services/>
            <Contact></Contact>
            <Footer></Footer>

            
            
        </div>
    );
};

export default Home;