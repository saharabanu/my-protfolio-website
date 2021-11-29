import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner  d-flex  align-items-center justify-content-center">
        <div className="row container">
          <div className="col-md-7 col-12">
              <h4 className="title">Hello</h4>
            <h4 className="title">I'm <span style={{color:'rgb(250, 128, 114)'}}>Sahara Banu</span></h4>
            <h2 className="title-sm"> Junior MERN Stack Developer</h2>
            <br />
            <a href="https://drive.google.com/file/d/1kk5QGOW7vbRWc-QJXhWOV8NUqJes5Bep/view" target="_blank" rel="noreferrer"style={{textDecoration:'none'}} className="resume">Resume</a>
            
          </div>
          <div className="col-md-5 col-12">
          <img style={{width:400 ,height: 400}} src="https://i.ibb.co/NmHvrhG/262402659-1735915976601927-4074890799033005079-n-removebg-preview.png" alt="" />
          </div>
          
        </div>
      </div>
    

        
    )
};

export default Banner;