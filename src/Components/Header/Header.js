import React from 'react'
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='left'>
            </div>
            <div className='right'>
                <li className='assignment'>My Assignment</li>
                <li className='chat'>Chat with Mentor</li>
                <li id='profile'><span>ProfileName</span> <span class="material-symbols-outlined">
                    expand_more</span></li>
            </div>
        </div>
    )
}

export default Header