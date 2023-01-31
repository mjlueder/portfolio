import '../styling/projects.css'

import ProjectPreview from "./ProjectPreview"

const ProjectsList = ({ projects }) => {
  return (
    <div className='project-list'>
      {projects.map(project => (
        <ProjectPreview project={project} key={project.id}/>
      ))}
    </div>
  )
}

export default ProjectsList