import React from 'react';

function Awards() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <img src='/media/largest-broker.svg' style={{padding: "0px 60px"}}/>
                </div>

                <div className='col-6 p-5 mb-5' >
                    <h2>Largest stock broker in India</h2>
                    <p className='mb-5 mt-4 fs-6'>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li className='mb-2'>Futures and Options</li>
                                <li className='mb-2'>Commodity derivatives</li>
                                <li >Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='mb-2'>Stocks & IPOs</li>
                                <li className='mb-2'>Direct mutual funds</li>
                                <li className='mb-5'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                    <img src='/media/press-logos.png'  style={{width: "90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;