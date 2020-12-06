import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import './quotes.css';



function Quotes() {
    
    return (
        <div className="containerquotes"> 
            <Typist>
            <h2> First Sentence </h2>
            <Typist.Delay ms={1000} />
                <br />
                <h2> This won't be animated until 500ms after the first sentenced is rendered</h2>
            <Typist.Delay ms={1000} />
                <br />
                <h2>This wont be typed till after the 3rd</h2>
            </Typist>
        </div>
        
    );
  }
  
  export default Quotes;
  