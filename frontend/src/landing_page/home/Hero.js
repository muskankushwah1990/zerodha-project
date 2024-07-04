import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/landing.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5 mb-3' style={{fontSize: "47px"}}>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='btn btn-primary fs-5 p-2 mt-4' style={{width: "20%", margin: "0 auto"}}>Sign up now</button>
            </div>
        </div>
     );
}

export default Hero;