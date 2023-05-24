import React from 'react';
import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to={'/'}>
                <h2>RBN-GAMES</h2>
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <NavLink to={`/plataforma/ps`}>PlayStation</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/plataforma/xbox`}>X-box</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/plataforma/nintendo`}>Nintendo</NavLink></li>
                    <li>
                        <NavLink to={`/plataforma/pc`}>PC</NavLink>
                    </li>
                </ul>
            </nav>
            <CardWidget />

        </header>
    )
}

export default NavBar