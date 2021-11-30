import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Explore = () => {
    const {projectId} = useParams();
    const [projectsDetails,setProjectsDetails] = useState([]);
    const [singlepProject,setSingleProject]= useState({});

    useEffect(()=>{
        fetch('/projects.json')
        .then(res=>res.json())
        .then(data=>setProjectsDetails(data))
    },[])

    useEffect(()=>{
        const foundSingleProject = projectsDetails.find(project=> project.id === projectId)
        setSingleProject(foundSingleProject);

    },[projectsDetails])
    return (
        <div className="text-dark container">
            <h2>Explore {projectId}</h2>
            <div className="card" >
            <img  style={{height:'300px'}} src={singlepProject?.img} className="card-img-top" alt="..."/>
            <img  style={{height:'300px'}} src={singlepProject?.img1} className="card-img-top" alt="..."/>
            <img  style={{height:'300px'}} src={singlepProject?.img2} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title fw-bold">Project Name: <span className="text-danger">{singlepProject?.title}</span></h5>
                <h5 className="card-title">Created: {singlepProject?.created}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <div className="" style={{textAlign:'left'}}>
                <li className="" style={{listStyle:'none'}}>• {singlepProject?.desc1}</li>
                <li className=""style={{listStyle:'none'}}>• {singlepProject?.desc2}</li>
                <li className=""style={{listStyle:'none'}}>• {singlepProject?.desc3}</li>
                <li className=""style={{listStyle:'none'}}>• {singlepProject?.desc4}</li>
                <li className=""style={{listStyle:'none'}}>• <span className="text-danger fw-bold">Technology Used: </span> {singlepProject?.tech}</li>
                </div>
            </ul>
            <div className="card-body">
                <a href={singlepProject?.liveLink} target="_blank" rel="noreferrer" className="card-link border rounded-pill p-2 bg-danger text-white" style={{textDecoration:'none'}}>Live link</a>
                <a href={singlepProject?.clientCode} target="_blank" rel="noreferrer"className="card-link border rounded-pill p-2 bg-danger text-white"style={{textDecoration:'none'}}>Client Code</a>
                <a href={singlepProject?.serverCode} target="_blank" rel="noreferrer" className="card-link border rounded-pill p-2 bg-danger text-white"style={{textDecoration:'none'}} >Server Code</a>
            </div>
            </div>
        </div>
    );
};

export default Explore;