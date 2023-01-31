import '../styling/preview.css'

const ProjectPreview = ({project}) => {
  return (
    <div>
      <img src={project.image} alt={project.title} className='list-pic'/>
      <section>
        <h2>
          {project.title}
        </h2>
      </section>
      <button>
        Learn More
      </button>
    </div>
  )
}

export default ProjectPreview