import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner d-flex  align-items-center justify-content-center">
        <div className="row container">
          
        <div className="col-md-5 col-12">
          <div className="d-flex  align-items-center justify-content-center ">
          <img className="rounded-circle" style={{width:300 ,height: 300}} src="https://i.ibb.co/NmHvrhG/262402659-1735915976601927-4074890799033005079-n-removebg-preview.png" alt="" />
            </div>
          </div>
          <div className="col-md-7 col-12" >
            <div className="d-flex  align-items-center justify-content-center">
            <div>
            <h2 className="title">Hello! I'm <span style={{color:'rgb(250, 128, 114)'}}>Sahara Banu</span></h2>
            <h4 className="title-sm"> Junior MERN Stack Developer</h4>
            <br />
            <a href="https://drive.google.com/file/d/1kk5QGOW7vbRWc-QJXhWOV8NUqJes5Bep/view" target="_blank" rel="noreferrer"style={{textDecoration:'none'}} className="resume rounded-pill mb-5"> My Resume</a>
            </div>
            </div>
            
          </div>
         
          
          
        </div>
      </div>
    

        
    )
};

export default Banner;