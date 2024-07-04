import React from 'react';

function LeftSection1({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    googlePlay,
    appStore
}) {
    return (
        <div className='container' style={{ width: "1100px", color: "#424242" }}>
            <div className='row'>
                <div className='col-7 mt-4 p-5' style={{ alignContent: "center" }} >
                    <img src={imageURL} style={{width: "100%"}}/>
                </div>
                <div className='col-1'></div>
                <div className='col-4 mt-5' style={{ padding: "3rem", paddingLeft: "2rem", paddingRight: "0" }} >
                    <h1 className='mt-3' style={{ fontSize: "33px" }}> {productName} </h1>
                    <p className='mt-4' style={{ fontSize: "17px", lineHeight: "1.8" }}> {productDescription} </p>
                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Coin →</a>

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

export default LeftSection1;