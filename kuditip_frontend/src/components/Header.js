import logo from '../images/frame_11.png';
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header className='header_section'>

        <Link>
            <img src={logo} alt="kuditip_logo" />
        </Link>

        <nav className='nav_section'>

            <NavLink>Explore</NavLink>

            <NavLink>About Us</NavLink>

            <NavLink>Blog</NavLink>

            <NavLink>Log In</NavLink>

            <NavLink>Sign Up</NavLink>

        </nav>
        
    </header>
  )
}
export default Header