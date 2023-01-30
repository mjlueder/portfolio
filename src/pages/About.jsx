import '../styling/home.css'
import photo from '../assets/photo.jpeg'

const About = () => {
  return (
    <>
      <h1>About Mary</h1>
      <img src={photo} alt="profile" id="main-photo"/>
      <p>I'm Mary, a full stack engineer with more than a decade of experience in conservation, animal care, and ecology. I try to follow my heart and my passion, and my career has taken me from ecology field work, to sea turtle rehabilitation, to animal behavior studies, and then onto the primate team at Disney’s Animal Kingdom.</p> 

      <p>I’ve had the opportunity to collaborate with many teams and lines of business across The Walt Disney Company. I love connecting with and bringing out the best in others. I have grown a lot as a creative problem-solver through the unique challenges and opportunities of providing excellent care for many different endangered species.</p>

      <p>I love the creativity and logic of programming. I enjoy the balance between backend functionality and frontend aesthetics and flow. I’m excited to take my unique skills and experiences and apply them to new problems. Ultimately, I want to continue to do work that is doing good; I think that’s incredibly important.</p>

      <p>Outside of work I also love music, yoga, mindfulness, wildlife, psychology, health, and wellness, and training my two crazy but wonderful dogs.</p>
    </>
  )
}

export default About