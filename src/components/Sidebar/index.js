import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope,faFolder, faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {  NavLink } from 'react-router-dom'
const Sidebar = () => (
    <div className='nav-bar'>
        {/* <Link className='logo' to='/'>

            <img src={image} alt="logo" />
            <img className='sub-logo' src={image2} alt="slobodan" />
        </Link> */}
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link"  to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                <FontAwesomeIcon icon={faFolder} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul className="links">
             <li>
             <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><ion-icon name="logo-instagram"></ion-icon> </a>
             </li>
             <li>
             <a href="https://www.linkedin.com/in/jonathon-van-ausdal-4087a023a/"><ion-icon name="logo-linkedin"></ion-icon></a>
             </li>
             <li>
             <a href="https://github.com/jonathonvanausdal9915" rel="noopener noreferrer" target="_blank"><ion-icon name="logo-github"></ion-icon> </a>
             </li>
             
        </ul>
    </div>
)

export default Sidebar