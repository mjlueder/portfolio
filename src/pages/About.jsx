import '../styling/home.css'
import photo from '../assets/photo.jpeg'

const About = () => {
  return (
    <>
      <h1>About Mary</h1>
      <img src={photo} alt="profile" id="main-photo"/>
      <p>I'm a full-stack engineer with more than a decade of experience in conservation, animal care, and ecology. My career has taken me from ecological field work, to sea turtle rehabilitation, to the primate team at Disney’s Animal Kingdom.</p>
      
      <p>I've gained a lot of experience as a creative problem-solver through the unique challenges and opportunities of providing excellent care for many different endangered species. I also love connecting with and bringing out the best in others, and I look forward to bringing that into my future roles.</p> 

      <p>I enjoy the creativity and logic of programming, and merging functionality, aesthetics, and flow. I’m excited to take my unique skills and experiences and apply them to new problems with new teams.</p>
      
      <p>Ultimately, I want to continue to do work that is doing good.</p>

      <p id="last-p">Outside of work, I also love music, yoga, mindfulness, wildlife, psychology, health, and wellness, and training my two crazy but wonderful dogs!</p>
    </>
  )
}

export default About