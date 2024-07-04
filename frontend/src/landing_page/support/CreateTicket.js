import React from 'react';
 
function CreateTicket() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <p  style={{fontSize: "25px", padding: "0 2.5rem"}}>To create a ticket, select a relevant topic</p>

                <div className='col-4' style={{lineHeight: "2.2", padding: "2rem 3rem"}}>
                 <p style={{fontSize: "20px"}}><i class="fa fa-sharp fa-light fa-circle-plus"></i> &nbsp;Account Opening</p>
                    <a href=''  style={{textDecoration: "none"}}>Getting started</a> <br />
                    <a href=''  style={{textDecoration: "none"}}>Online</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Offline</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Charges</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Company, Partnership and HUF</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Non Resident Indian (NRI)  </a> 
                </div>

                <div className='col-4' style={{lineHeight: "2.2", padding: "2rem 3rem"}}>
                 <p style={{fontSize: "20px"}}><i class="fa fa-thin fa-user"></i> &nbsp; Your Zerodha Account</p>
                    <a href=''  style={{textDecoration: "none"}}>Login credentials</a> <br />
                    <a href=''  style={{textDecoration: "none"}}>Your Profile</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Account modification and segment</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>CMR & DP ID</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Nomination</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Transfer and conversion of shares </a> 
                </div>

                <div className='col-4' style={{lineHeight: "2.2", padding: "2rem 3rem"}}>
                 <p style={{fontSize: "20px"}}><i class="fa fa-sharp fa-light fa-circle-plus"></i> &nbsp;Trading and Marketst</p>
                    <a href=''  style={{textDecoration: "none"}}>Trading FAQs</a> <br />
                    <a href=''  style={{textDecoration: "none"}}>Kite</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Margins</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Product and order types</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Corporate actions</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Kite features </a> 
                </div>

                <div className='col-4' style={{lineHeight: "2.2", padding: "1rem 3rem"}}>
                 <p style={{fontSize: "20px"}}><i class="fa fa-sharp fa-light fa-circle-plus"></i> &nbsp; Funds</p>
                    <a href=''  style={{textDecoration: "none"}}>Fund withdrawal</a> <br />
                    <a href=''  style={{textDecoration: "none"}}>Adding funds</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Adding bank accounts</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>eMandates</a> 

                </div>

                <div className='col-4' style={{lineHeight: "2.2", padding: "1rem 3rem"}}>
                 <p style={{fontSize: "20px"}}><i class="fa fa-sharp fa-light fa-circle-plus"></i>  &nbsp;Console</p>
                    <a href=''  style={{textDecoration: "none"}}>IPO</a> <br />
                    <a href=''  style={{textDecoration: "none"}}>Portfolio</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Funds statement</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Profile</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Reports</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Referral program</a> 
                </div>

                <div className='col-4' style={{lineHeight: "2.2", padding: "1rem 3rem"}}>
                 <p style={{fontSize: "20px"}}><i class="fa fa-sharp fa-light fa-circle-plus"></i> &nbsp;Coin</p>
                    <a href=''  style={{textDecoration: "none"}}>Understanding mutual funds and Coin</a> <br />
                    <a href=''  style={{textDecoration: "none"}}>Coin app</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Coin web</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>Transactions and reports</a>  <br />
                    <a href=''  style={{textDecoration: "none"}}>National Pension Scheme (NPS)</a>  
           
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;
