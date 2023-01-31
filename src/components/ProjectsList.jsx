import ProjectPreview from "./ProjectPreview"

const ProjectsList = ({ projects }) => {
  return (
    <div>
      {projects.map(project => (
        <ProjectPreview project={project} key={project.title}/>
      ))}
    </div>
  )
}

export default ProjectsList