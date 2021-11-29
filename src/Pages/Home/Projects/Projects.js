import React from 'react';



const projects=[
    {
        id:"01",
      img:'https://i.ibb.co/nBvfXnT/travel.png' ,
      title:'Travel',
      desc: 'Travel is a hotel booking website based on the place tou want visit' 
    },
    {
        id:"02",
      img:'https://i.ibb.co/nBvfXnT/travel.png' ,
      title:'Travel',
      desc: 'It is a Mern Stack project.Travel is a hotel booking website based on the place that you want to visit',
      liveLink:'https://tourism-related-website.web.app/'

    },
    {
        id:"03",
      img:'https://i.ibb.co/LCb0ThP/travel1.png' ,
      title:'Travel',
      desc: 'Travel is a hotel booking website based on the place tou want visit' 
    }
]

const Projects = () => {
    
    return (
        <div id="projects">
            <h4>My Projects</h4>
            <div className="container">
                <div className="row">
                    {projects.map(project=><div key={project.id} className="col-md-4 col-12">
                        <div className="border">
                            <img style={{width:300 , height: 200}} src={project.img} alt="" />
                            <h4>{project.title}</h4>
                            <p>{project.desc}</p>
                            
                        </div>

                    </div>)}

                </div>

            </div>
        </div>
    );
};

export default Projects;