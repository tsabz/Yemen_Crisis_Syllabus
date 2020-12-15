import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import './quotes.css';



function Quotes() {
    
    return (
        <div className="containerquotes"> 
            <Typist>
            <h2>“Staying home means starving to death for millions displaced in Yemen”</h2>-CNN, April 2015
            <br />
            <Typist.Delay ms={1050} />
                <br />
                <h2> “The war in Yemen is getting worse -- and a civilian catastrophe is looming”</h2>-NPR, 2015
                <br />
            <Typist.Delay ms={1050} />
                <br />
                <h2>“U.S. Confirms It Is Supporting Saudi Military Operations In Yemen”</h2>-Reuters, 2020
                <br />
            <Typist.Delay ms={1050} />
                <br />
                <h2>“Yemen could lose an entire generation of children to hunger, yet the world remains silent”</h2>-MidEast Monitor, 2020
                <br />
            <Typist.Delay ms={1050} />
                <br />
                <h2>“UN sounds ‘wake-up call’ to save millions of Yemenis from famine”</h2>-Aljazeera, 2020
                <br />                
            </Typist>
        </div>
        
    );
  }
  
  export default Quotes;
  