import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <Link to='/'>Mary Lueder</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default NavBar