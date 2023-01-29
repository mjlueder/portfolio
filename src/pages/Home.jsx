import '../styling/home.css'
import photo from '../assets/photo.jpeg'

const Home = () => {
  return (
    <>
      <h1>Mary Lueder</h1>
      <img src={photo} alt="profile" id="main-photo"/>
      <h2>Full Stack Developer</h2>
    </>
  )
}

export default Home