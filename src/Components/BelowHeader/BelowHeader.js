import React from 'react'
import './belowHeader.css'
const BelowHeader = () => {
    return (
        <div className='belowHeader'>
            <div className='left'>
                <div className='leftContent'>
                    <li>Refferal Earning</li>
                    <h1><span class="material-symbols-outlined">currency_rupee</span>2500</h1>
                </div>
                <div className='leftContent'>
                    <li>Total Rewards</li>
                    <h1>7</h1>
                </div>
                <div className='leftContent'>
                    <li>Wallet Ballance</li>
                    <h1><span class="material-symbols-outlined">currency_rupee</span>5000</h1>
                </div>
                <button className='leftContent button'>WithDraw Ballance</button>
            </div>
            <div className='right'>
                <h3>Your Referral Code</h3>
                <div className='ref'>
                    <li className='li'>S</li>
                    <li className='li'>A</li>
                    <li className='li'>C</li>
                    <li className='li'>H</li>
                    <li className='li'>3</li>
                    <li>2</li>
                </div>
            </div>
        </div>
    )
}

export default BelowHeader
//916