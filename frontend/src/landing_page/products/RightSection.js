
import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,

}) {
    return (
        <div className='container mt-5' style={{ width: "1100px", color: "#424242" }}>
            <div className='row '>


                <div className='col-4' style={{ padding: "3rem", paddingRight: "0", marginTop: "7rem" }} >
                    <h1 className='mt-5' style={{ fontSize: "33px" }}> {productName} </h1>
                    <p className='mt-4' style={{ fontSize: "17px", lineHeight: "1.8" }}> {productDescription} </p>
                    <div>
                        
                        <a href={learnMore} style={{ textDecoration: "none", fontWeight: "500" }}>Learn More →</a>
                    </div>

                </div>

                <div className='col-1'></div>

                <div className='col-7 ' >
                    <img src={imageURL} style={{width: "100%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;