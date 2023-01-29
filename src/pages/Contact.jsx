import { Link } from "react-router-dom"
import '../styling/contact.css'

import gh from '../assets/gh.png'
import li from '../assets/li.png'
import cw from '../assets/cw.png'

const Contact = () => {
  return (
    <>
      <h1>Reach out if you'd like to connect!</h1>
      <h2>mlueder@gmail.com</h2>
      <div id='contact-links'>
        <Link 
          to='https://www.linkedin.com/in/marylueder/' 
          target='_blank'>
            <img src={li} alt="linkedin icon" />
        </Link>
        <Link 
          to='https://github.com/mjlueder' 
          target='_blank'>
            <img src={gh} alt="github icon" />
        </Link>
        <Link 
          to='https://www.codewars.com/users/mjlue' 
          target='_blank'>
            <img src={cw} alt="codewars icon" />
        </Link>
      </div>
    </>
  )
}

export default Contact