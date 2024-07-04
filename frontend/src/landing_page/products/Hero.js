import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center mt-5'>
                <h1 className='mt-5 ' style={{fontSize: "45px", lineHeight: "1.5"}}>Technology</h1>
                <p style={{fontSize: "20px"}}>Sleek, modern, and intuitive trading platforms</p>
                <p className='mb-5' style={{fontSize: "17px"}}>Check out our <a href='' style={{textDecoration: "none"}}>investment offerings  →</a></p>
            </div>
        </div>
     );
}

export default Hero;