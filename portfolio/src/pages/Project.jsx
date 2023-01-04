import React from 'react'
import Projectitems from '../components/Projectitems'
import { ProjectList } from '../projets/ProjectList'
import '../styles/Projects.css'
const Project = () => {
    return (
        <div className='projects' >
            <h1> my personal projects </h1>
            <div className="projectList">
                {
                    ProjectList.map((item, index) => {
                        return <Projectitems id={index} name={item.name} image={item.image} />
                    })
                }
            </div>
        </div>
    )
}

export default Project