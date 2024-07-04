import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5 text-center' style={{ width: "1100px", color: "#424242" }}>
            <div className='row p-5'>
            <p style={{marginBottom:"90px", fontSize: "1.25rem", lineHeight: "1.7"}}>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration: "none"}}>Zerodha.tech</a> blog.</p>

                <h1 style={{fontSize: "35px"}}>The Zerodha Universe</h1>
                <p className='mt-4' style={{fontSize: "17px"}}>Extend your trading and investment experience even further with our partner platforms</p>

                
                <div className='col-4 mt-5'>
                    <img src='/media/smallcase-new-logo.png'/>
                    <p className='p-3' style={{fontSize: "13px", fontWeight: "500", color:"#9b9b9b"}}>Thematic investment platform</p>
                    
                </div>
                <div className='col-4 mt-5' >
                    <img src='/media/streak-logo.png' style={{width: "50%"}}/>
                    <p className='p-3'  style={{fontSize: "13px", fontWeight: "500", color:"#9b9b9b"}}>Algo & strategy platform</p>

                </div>
                <div className='col-4 mt-5' >
                    <img src='/media/sensibull-logo.svg' style={{width: "60%"}}/>
                    <p className='p-3'  style={{fontSize: "13px", fontWeight: "500", color:"#9b9b9b"}}>Options trading platform</p>
                </div>



                <div className='col-4 mt-5'>
                    <img src='/media/zerodhafundhouse.png' style={{width: "65%"}}/>
                    <p className='p-3'  style={{fontSize: "13px", fontWeight: "500", color:"#9b9b9b"}}>Asset management</p>
                    
                </div>
                <div className='col-4 mt-5' >
                    <img src='/media/tijori.svg' style={{width: "45%"}}/>
                    <p className='p-3'  style={{fontSize: "13px", fontWeight: "500", color:"#9b9b9b"}}>Fundamental research platform</p>

                </div>
                <div className='col-4 mt-5' >
                    <img src='/media/ditto-logo.png' style={{width: "45%"}}/>
                    <p className='p-3'  style={{fontSize: "13px", fontWeight: "500", color:"#9b9b9b"}}>Insurance</p>
                </div>

                <button className='btn btn-primary fs-5 p-2 mt-4 mb-4' style={{width: "18%", margin: "0 auto", fontWeight: "500"}}>Sign up now</button>


            </div>
        </div>
     );
}

export default Universe;