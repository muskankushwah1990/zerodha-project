import React from 'react';

function Hero() {
    return (
        <div className='container text-center border-bottom mb-5' style={{ marginTop: "120px", color: "#424242", maxWidth: "1100px" }}>
            <h1 style={{ fontSize: "47px" }}>Pricing</h1>
            <p style={{ marginBottom: "120px" }} className='fs-4 mt-3 '>Free equity investments and flat ₹20 intraday and F&O trades</p>

            <div className='row border-top' style={{marginBottom: "80px"}}>
                <div className='col-4 p-3 text-center ' style={{ marginTop: "80px" }}>
                    <img src='/media/pricing-eq.svg' style={{ width: "75%" }} />
                    <h4 className='mb-4 fs-3' >Free equity delivery</h4>
                    <p className='text-muted' style={{ fontSize: "17px", lineHeight: "1.8" }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-3 text-center' style={{ marginTop: "70px" }}>
                    <img src='/media/other-trades.svg' style={{ width: "80%" }} />
                    <h4 className='mb-4 fs-3' >Intraday and F&O trades</h4>
                    <p className='text-muted' style={{ fontSize: "17px", lineHeight: "1.8" }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades</p>
                </div>
                <div className='col-4 p-3 text-center' style={{ marginTop: "75px" }}>
                    <img src='/media/pricing-eq.svg' style={{ width: "80%" }} />
                    <h4 className='mb-4 fs-3' >Free direct MF </h4>
                    <p className='text-muted' style={{ fontSize: "17px", lineHeight: "1.8" }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;