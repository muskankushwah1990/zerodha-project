import React from 'react';

function TeamMember() {
    return (
        <div className='container' style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
            <div className='row text-center' style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
                <div className='col-4 p-5'>
                    <img src='/media/Nikhil.jpg' style={{ width: "85%", borderRadius: "100%" }} />
                    <p className='text-center mt-3' style={{ fontSize: "20px" }}>Nikhil Kamath</p>
                    <p className='text-center text-muted'>Co-founder & CFO</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='/media/Kailash.jpg' style={{ width: "85%", borderRadius: "100%" }} />
                    <p className='text-center mt-3' style={{ fontSize: "20px" }}>Dr. Kailash Nadh</p>
                    <p className='text-center text-muted'>CTO</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='/media/Venu.jpg' style={{ width: "85%", borderRadius: "100%" }} />
                    <p className='text-center mt-3' style={{ fontSize: "20px" }}>NVenu Madhav</p>
                    <p className='text-center text-muted'>COO</p>
                </div>
            </div>

            <div className='row text-center' style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
                <div className='col-4 p-5'>
                    <img src='/media/Hanan.jpg' style={{ width: "85%", borderRadius: "100%" }} />
                    <p className='text-center mt-3' style={{ fontSize: "20px" }}>Hanan Delvi</p>
                    <p className='text-center text-muted'>CCO</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='/media/Seema.jpg' style={{ width: "85%", borderRadius: "100%" }} />
                    <p className='text-center mt-3' style={{ fontSize: "20px" }}>Seema Patil</p>
                    <p className='text-center text-muted'>Director</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='/media/karthik.jpg' style={{ width: "85%", borderRadius: "100%" }} />
                    <p className='text-center mt-3' style={{ fontSize: "20px" }}>Karthik Rangappa</p>
                    <p className='text-center text-muted'>Chief of Education</p>
                </div>
            </div>

            <div className='row text-center' style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
                <div className='col-4 p-5'>
                    <img src='/media/Austin.jpg' style={{ width: "85%", borderRadius: "100%" }} />
                    <p className='text-center mt-3' style={{ fontSize: "20px" }}>Austin Prakesh
                    </p>
                    <p className='text-center text-muted'>Director Strategy</p>
                </div>

            </div>


        </div>
    );
}

export default TeamMember;