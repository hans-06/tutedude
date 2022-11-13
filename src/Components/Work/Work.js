import './work.css'
import { React } from 'react'
import InsideWork from '../InsideWork/InsideWork'

const Work = () => {
    return (
        <div className='work'>
            <h2 className='heading'>How does it Work?</h2>
            <div className='contentContainer'>
                <InsideWork heading={"Invite Your Friend"} p={"Share the link tuteDude.com with your friends"} icon={"Groups"} />
                <InsideWork heading={"Friend Purchases any course"} p={"Using your REFFERAL CODE in the payment page"} icon={"Sell"} />
                <InsideWork heading={"You get Rs. 200 as referral money"} p={"On total purchase the friend makes, into your wallet"} icon={"currency_rupee"} />
                <InsideWork heading={"Your friend gets Rs. 200 off"} p={"On his overall fee on successfull purchase using your referral code"} />
                <InsideWork heading={"Transfer money from wallet"} p={"When the wallet ballance reaches Rs. 200 or more, you can withdraw it"} icon={"account_balance_wallet"} />
            </div>
        </div>
    )
}

export default Work