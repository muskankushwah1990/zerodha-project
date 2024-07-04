import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='support'>
            <div  id='supportWrapper'>
            <p  style={{fontSize: "24px", fontWeight: "500"}}>Support</p>
            
            <a  href=''>Track tickets</a>
            </div>
           <div className='container'>
           <div className='row' style={{padding: "0 4rem"}}>
                <div className='col-7' id='left-link'>
                    <p className='mb-4' style={{fontSize: "24px"}}>Search for an answer or browse help topics to create a ticket</p>
                    <div id='search-bar'>
                        
                    
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' /> 
                    <i id='search' class="fa fa-light fa-magnifying-glass"></i>
                    </div>
                    
                    
                   <a  href=''>Track account opening</a> 
                    <a href=''>Track segment activation</a> 
                   <a href=''>Intraday margins</a>
                   <a href=''> Kite user manual</a>
                </div>
                <div className='col-5 p-5'>
                    <p className='fs-4' style={{fontWeight: "500"}}>Featured</p>
                    <ol>
                        <li> <a href='' style={{lineHeight: "3rem"}}>Current Takeovers and Delisting - June 2024</a> </li>
                        <li><a href='' style={{lineHeight: "3rem"}}>Latest Intraday leverages and Square-off timings</a> </li>
                    </ol>
                   
                    
                </div>
            </div>
           </div>
        </section>
     );
}

export default Hero;