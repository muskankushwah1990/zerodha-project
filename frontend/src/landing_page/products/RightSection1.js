
import React from 'react';

function RightSection1({
    imageURL,
    productName,
    productDescription,
    learnMore,
  
}) {
    return (
        <div className='container mt-5' style={{ width: "1100px", color: "#424242" }}>
            <div className='row '>


                <div className='col-4' style={{ paddingRight: "0", marginTop: "7rem" }} >
                    <h1  style={{ fontSize: "33px" }}> {productName} </h1>
                    <p className='mt-4' style={{ fontSize: "17px", lineHeight: "1.8" }}> {productDescription} </p>
                    <div>
                        
                        <a href={learnMore} style={{ textDecoration: "none", fontWeight: "500" }}>Kite Connect   →</a>
                    </div>

                </div>

                <div className='col-1'></div>

                <div className='col-7 p-5' >
                    <img src={imageURL}  style={{width: "100%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection1;