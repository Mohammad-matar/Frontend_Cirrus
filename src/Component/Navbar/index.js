import React from 'react'
import { Link } from 'react-router-dom'
import { GiBookAura } from "react-icons/gi"
import './style.css'


export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='app-icon'>
                <GiBookAura />
            </div>
            <div className='unordored-list'>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/student">Student</Link></li>
                    <li><Link to="/homework">Homework</Link></li>
                </ul>
            </div>
        </div>
    )
}
