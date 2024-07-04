import React from 'react';

function Education() {
    return (
        <div className='container p-5' style={{ color: "#424242"}}>
            <div className='row p-5'>
            <div className='col-6'>
                    <img src='/media/index-education.svg' style={{width: "80%"}}/>
                </div>
                <div className='col-6 p-5'>
                    <h3 className='mb-4'>Free and open market education</h3>
                    <p style={{fontSize: "17px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{ textDecoration: "none" }}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className='mt-4' style={{fontSize: "17px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=''  style={{ textDecoration: "none" }}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                    
                </div>
            </div>
        </div>

    );
}

export default Education;