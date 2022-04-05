import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../media/logo.png';


const Navbar = () => {
    return (
        <nav className="navbar navbar-black bg-black">
            <div className="logo">
                <NavLink to='/' >
                    <img className="navbar-brand" src={Logo} alt="" />
                </NavLink>
            </div>
            <div className='menu'>
                <li><NavLink
                    className={({ isActive }) => (isActive ? 'active' : 'desactive')}
                    to='/music' >Music</NavLink></li>

                <li><NavLink
                    className={({ isActive }) => (isActive ? 'active' : 'desactive')}
                    to='/about'  >About</NavLink></li>


            </div>
        </nav>
    )
}

export default Navbar