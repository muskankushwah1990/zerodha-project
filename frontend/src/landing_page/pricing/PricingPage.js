import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount'
import List from './List';


function PricingPage() {
    return ( 
        <>
         
          <Hero />
          <OpenAccount />
          <Brokerage />
          <List />
          
        </>
     );
}

export default PricingPage;