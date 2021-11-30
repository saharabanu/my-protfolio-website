import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css';


const Projects = () => {

    const [projects,setProjects] = useState([])
    useEffect(()=>{
        fetch('/projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    
    return (
        <div id="projects" style={{marginTop:'70px'}}>
            <h4 className="mb-5 fw-bold text-danger">My Projects</h4>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {projects?.map(project=><div key={project.id} className="col">
                        <div className="border card projects-div h-100">
                          <img src={project.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-dark">{project?.title}</h5>
                        
                    </div>
                    <div className="card-footer">
                    <Link to={`/projects/${project.id}`}><Button variant="warning">More Details</Button></Link>
                    </div>
                            
                        </div>

                    </div>)}

                </div>

            </div>
        </div>
    );
};

export default Projects;