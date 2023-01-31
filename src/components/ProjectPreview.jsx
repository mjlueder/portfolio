import '../styling/projects.css'
import ProjectDetails from '../pages/ProjectDetails'
import { Link } from 'react-router-dom'

const ProjectPreview = ({project}) => {
  return (
    <div className='project-card'>
      <img src={project.image} alt={project.title} className='list-pic'/>
      <h2>{project.title}</h2>
      <Link to={`/projects/${project.id}`}>
        <button>
          Learn More
        </button>
      </Link>
    </div>
  )
}

export default ProjectPreview