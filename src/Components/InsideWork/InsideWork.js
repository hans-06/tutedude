import './insideWork.css'

import React from 'react'

const InsideWork = ({ heading, p, icon }) => {
    console.log(icon)
    return (
        <div className='insideWork'>
            <div className='icon'>
                {icon ? <span className="material-symbols-outlined">{icon}</span> :  <img src="vector.png" alt="Offer" /> }
            </div>
            <div className='content'>
                <p className='contentHeading'>{heading}</p>
                <p>{p}</p>
            </div>
        </div>
    )
}

export default InsideWork