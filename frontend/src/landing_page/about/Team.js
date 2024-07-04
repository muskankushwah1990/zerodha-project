import React from 'react';

function Team() {
    return ( 
        <div className='container' style={{width: "1000px"}}>
            <div className='row'>
                <h1 className='text-center'>People</h1>
            </div>

            <div className='row p-4' >
                <div className='col-5 p-5'>
                    <img src='/media/nithin-kamath.jpg' style={{width: "100%", borderRadius: "100%"}}/>
                    <p className='text-center mt-3' style={{fontSize: "20px"}}>Nithin Kamath</p>
                    <p className='text-center text-muted'>Founder, CEO</p>
                </div>
                <div className='col-7' style={{lineHeight: "1.8", marginBottom: "15px", fontSize: "17px", color:"#424242", marginTop: "70px"}}>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                        <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). </p>

                        <p> Playing basketball is his zen.</p>

                        <p>Connect on <a href='' style={{textDecoration: "none"}}>Homepage </a> /  <a href='' style={{textDecoration: "none"}}>TrandingQnA </a> / <a href='' style={{textDecoration: "none"}}>Twitter </a></p>
                    </div>
            </div>
        </div>
    
     );
}

export default Team;