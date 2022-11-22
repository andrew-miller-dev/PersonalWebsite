import React from 'react';
import Typist from 'react-typist';
import headshot from '../../assets/headshot.jpg'
import "./title.css"

export default function Title (props){
    const word = `<Andrew Miller Dev/>`
    const sentence = `Your team's missing Component`


    return (
        <div className="titleBox"style={{display:"flex", justifyContent:"center"}}>
            <div>
            <img src= {headshot} alt="You dumb." style={{width:"150px", border:"solid 1px", margin:"2px"}} />
            </div>
      
        <div>
            <Typist
            avgTypingDelay={100}
            stdTypingDelay={5}
            cursor={{
                show: true,
                blink: true,
                element: '_',
                hideWhenDone: false,
                hideWhenDoneDelay: 500,
              }}>
                  <span style={{fontSize:"80px"}}>
                      {word}
                  </span>
                  <br />
                <span>
                   {sentence}
                </span>
            </Typist>
        </div>  
        </div>
    )
}