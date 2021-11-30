import React from 'react';
import './Skills.css';


const skills = [
    {   
        id:'01',
        img:'https://i.ibb.co/XxLJgfq/html.jpg',
        title:'HTML'
    },
    {
        id:'02',
        img:'https://i.ibb.co/pP1zsKS/css.png',
        title:'CSS'
    },
    {
        id:'03',
        img:'https://i.ibb.co/8KWShGJ/bootstrap.jpg',
        title:'Bootstrap'
    },
    {
        id:'04',
        img:'https://i.ibb.co/3NVwy1J/tailwind.png',
        title:'Tailwind.CSS'
    },
    {
        id:'05',
        img:'https://i.ibb.co/LgcMHXS/java.png',
        title:'Javascript'
    },
    {
        id:'06',
        img:'https://i.ibb.co/JC9VJsY/react.jpg',
        title:'React'
    },
    {
        id:'07',
        img:'https://i.ibb.co/VmCtmJf/materila.png',
        title:'Material-UI'
    },
    {
        id:'08',
        img:'https://i.ibb.co/QDBVhXw/dofirebase.png',
        title:'Firebase'
    },
    {
        id:'09',
        img:'https://i.ibb.co/f0wjM1k/node.png',
        title:'Node.js'
    },
    {
        id:'010',
        img:'https://i.ibb.co/ZYZY1hb/mongodb.jpg',
        title:'MongoDB'
    },
    {
        id:'011',
        img:'https://i.ibb.co/0DkCgHp/express.jpg',
        title:'Express.js'
    },
    {
        id:'02',
        img:'https://i.ibb.co/CtgdHxD/github.png',
        title:'Github'
    }
]

const Skills = () => {
    return (
        <div className="container">
            <h2>My Skills</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {skills?.map(skill=><div key={skill.id} className="col ">
                        <div className="main-div">
                    <img style={{height:'100px',width:'100px'}} src={skill.img} className="card-img-top skill-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{skill.title}</h5>
                        
                    </div>
                    </div>
                        



                        
                    </div>
                    )}
                
            </div>
        </div>
    );
};

export default Skills;