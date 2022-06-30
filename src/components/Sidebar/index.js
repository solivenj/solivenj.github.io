import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoPic from '../../assets/images/John Soliven.png';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => (
    <>
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoPic} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#748cab" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#748cab" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#748cab" />
                </NavLink>
            </nav>
        </div>
        
    </>
)

export default Sidebar