import React from 'react';

function Stats() {
    return ( 
        <div className='container' style={{color: "#424242", paddingLeft: "3rem", paddingRight: "3rem"}}>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h5>Customer-first always</h5>
                    <p className='text-muted' style={{marginBottom: "40px", fontSize: "17px"}}>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                    <h5>No spam or gimmicks</h5>
                    <p className='text-muted'  style={{marginBottom: "40px" , fontSize: "17px"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h5>The Zerodha universe</h5>
                    <p className='text-muted'  style={{marginBottom: "40px", fontSize: "17px"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h5>Do better with money</h5>
                    <p className='text-muted'  style={{marginBottom: "40px", fontSize: "17px"}}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='/media/ecosystem.png' style={{width: "100%", marginTop: "90px"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration: "none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;