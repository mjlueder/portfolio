import { projects } from "../data/projects"

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.title}>
            {project.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Projects