import React from 'react';

function LeftSection2({
    imageURL,
    productName,
    productDescription,
    googlePlay,
    appStore
}) {
    return (
        <div className='container' style={{ width: "1100px", color: "#424242" , padding: "3rem", paddingLeft: "5rem", paddingRight: "0" }}>
            <div className='row'>
                <div className='col-7 mt-4 ' style={{ alignContent: "center" }} >
                    <img src={imageURL} style={{width: "75%"}}/>
                </div>
                <div className='col-1'></div>
                <div className='col-4 ' style={{ paddingTop: "7rem",  paddingRight: "0" }} >
                    <h1 className='mt-3' style={{ fontSize: "33px" }}> {productName} </h1>
                    <p className='mt-4' style={{ fontSize: "17px", lineHeight: "1.8" }}> {productDescription} </p>
                    <div>
                        

                        <div className='mt-4'>
                            <a href={googlePlay}>
                                <img src='/media/google-play-badge.svg' style={{width: "45%"}}/>
                            </a>
                            <a href={appStore} style={{ marginLeft: "20px", textDecoration: "none" }}>
                                <img src='/media/appstore-badge.svg' style={{width: "40%"}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection2;