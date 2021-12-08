import React from 'react';
import Typist from 'react-typist';

export default function Title (props){
    const word = `<AndrewMiller />`
    const sentence = `Your team's missing Component`


    return (
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
    )
}