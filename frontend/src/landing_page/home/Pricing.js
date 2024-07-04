import React from 'react';

function Pricing() {
    return ( 
        <div className='container ' style={{color: "#424242"}}>
            <div className='row '>
                <div className='col-6' style={{ color: "#424242",  paddingLeft: "170px"}}>
                    <h2 className='mb-4'>Unbeatable pricing</h2>
                    <p style={{fontSize: "17px"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration: "none"}}>See Pricing  <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-6' style={{paddingLeft:"20px",paddingRight: "160px"}}>
                    <div className='row text-center'>
                        <div className='col p-4 border'>
                            <h1 className='mb-4'>₹0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className='col p-4 border'>
                            <h1 className='mb-4'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;