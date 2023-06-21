import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Component() {
    const [First, setFirst] = useState('');
    useEffect(() => {
        async function GetData() {
            const a = await fetch("https://type.fit/api/quotes");
            const b = await a.json();
            // console.log(b);
            
            const Randomlist = Math.floor(Math.random() * b.length);
            const c = b[Randomlist];
            const { author, text } = c;
            setFirst((`Text:${text} \n \nAuthor:${author}`))
        }
        GetData();
    }, []);
    const myStyle = {
        divs: {
            height: '100%',
            backgroundImage: ' linear-gradient(aqua,red, yellow, blue)',
          
            
        },
        h2: {
            whiteSpace: 'pre-line',
            position:'relative',
            display:'block',
            padding: '200px 20px',
            border: '3px solid green',
            
            textAlign:' center',
            textShadow: '2px 2px 5px red',
        },
        h1:{
            color:'linear-gradient(red, yellow, blue)',
        },
    }

    return (<div className="text-center contents" style={myStyle.divs}>
        <h1 className="text-primary" style={myStyle.h1}>Motivational Thoughts</h1>
        <hr />

        <h2 style={myStyle.h2} className="text-dark text-center">{First}</h2>

        <hr />
    </div>);
}
export default Component; 