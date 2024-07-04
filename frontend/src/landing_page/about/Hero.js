import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center fs-2 mt-5 mb-5' style={{ fontSize: "2rem", color: "#424242", lineHeight: "1.5" }}>We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.</h1>
            </div>

            <div className='container' style={{width: "1000px"}}>
                <div className='row p-5 border-top'>
                    <div className='col-6 mt-5' style={{lineHeight: "1.8", marginBottom: "15px", fontSize: "17px", color:"#424242"}}>
                        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier. </p>

                        <p>  Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                        <p>  Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </div>
                    <div className='col-6 mt-5' style={{lineHeight: "1.8", marginBottom: "15px", fontSize: "17px", color:"#424242"}}>
                        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. </p>

                        <p> <a style={{textDecoration: "none"}} href=''>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets. </p>

                        <p>  And yet, we are always up to something new every day. Catch up on the latest updates on our <a style={{textDecoration: "none"}} href=''>blog</a> or see what the media is <a style={{textDecoration: "none"}} href=''>saying about us</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;