import React from 'react';
import './Services.css';
const services=[
    {
       id:'01',
       title:'WEB DESIGN',
       desc:"In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design"

    },
    {
       id:'02',
       title:'WEB DEVELOPMENT',
       desc:"Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience."

    },
    {
       id:'03',
       title:'RESPONSIVE DESIGN',
       desc:"Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, media queries"

    },
    {
       id:'04',
       title:'BUG FIXING',
       desc:"A bug fix is a change to a system or product designed to handle a programming bug/glitch. Many different types of programming bugs that create errors with system implementation may require specific bug fixes that are successfully resolved by a development or other IT team."

    }
]

const Services = () => {
    return (
        <div id="services"className="container" style={{marginTop:'70px'}}>
            <h3 className="mb-3">My Services</h3>
            <div className="row">
                {services.map(service=><div key={service.id}className="col-md-3 col-12 mb-3">
                    <div className="border h-100  service"  data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h4>{service.title}</h4>
                        <p>{service.desc}</p>
                    </div>

                </div>)}
            </div>
        </div>
    );
};

export default Services;