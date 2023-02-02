import '../styling/projects.css'

import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import { Link } from 'react-router-dom'

const ProjectDetails = () => {
  const { id } = useParams()
  console.log(id);
  const project = projects.filter(proj => (proj.id === id))
  console.log(project);

  return (
    <>
      <h1>{project[0].title}</h1>
      <img src={project[0].image} alt={project[0].title} className='details-pic'/>
      <div className='description'>
        <p>{project[0].description1}</p>
        <p>{project[0].description2}</p>
      </div>
      <div className='project-btns'>
        <Link to={project[0].deployLink} target='_blank'>
          <button className='project-btn'>Deployed App</button>
        </Link>
        <Link to={project[0].repoLink} target='_blank'>
          <button className='project-btn'>Repository</button>
        </Link>
        <Link to='/projects' className='back-btn project-btn'>
          <button>Back</button>
        </Link>
      </div>
    </>
  )
}

export default ProjectDetails