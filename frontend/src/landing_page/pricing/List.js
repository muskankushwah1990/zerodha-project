import React from 'react';

function List() {
    return ( 
        <div className='container p-5'>
            <div className='row text-muted' style={{padding: "0 3rem"}}>
            <ul className='mb-5' style={{padding: "0 3rem", fontSize: "13px", lineHeight: "2"}}>
                <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                <li>Digital contract notes will be sent via e-mail.</li>
                <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            </ul>
            </div>
        </div>
     );
}

export default List;