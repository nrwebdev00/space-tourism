import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// Import Images
import logo from '../Img/shared/logo.png';

export default function Header(props) {
  const [active] = useState(props.active)

  console.log(active)
  return (
    <header className="header-main">
      <Link to='/' ><img src={logo} alt="logo" /></Link>
      <div className="header-main__line"></div>
      <nav className="nav-bar-header nav-bar-header-main">
        <ul role='list'>
          <li className='nav-text'>
            <Link to="/" className={`padding-bottom-4 ${active === 'Home' ? 'active' : ''}`}>
              <span className='darken-text'>00 </span> Home
            </Link>
          </li>
          <li className='nav-text'>
            <Link to="/destination" className={`padding-bottom-4 ${active === 'Destination' ? 'active': ''}`} >
              <span className='darken-text'>01 </span> Destination
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/crew" className={` padding-bottom-4 ${active === 'Crew' ? 'active': ''}`}>
              <span className="darken-text">02 </span> Crew
            </Link>
          </li>
          <li className="nav-text">
            <Link to='/technology' className={` padding-bottom-4 ${active === 'Technology' ? 'active' : ''}`}>
              <span className="darken-text">03 </span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
