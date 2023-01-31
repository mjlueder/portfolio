import '../styling/projects.css'
import ProjectDetails from '../pages/ProjectDetails'
import { Link } from 'react-router-dom'

const ProjectPreview = ({project}) => {
  return (
    <div>
      <img src={project.image} alt={project.title} className='list-pic'/>
      <section>
        <h2>
          {project.title}
        </h2>
      </section>
      <Link to={`/projects/${project.id}`}>
        <button>
          Learn More
        </button>
      </Link>
    </div>
  )
}

export default ProjectPreview