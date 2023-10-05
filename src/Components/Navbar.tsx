// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
