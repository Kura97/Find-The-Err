import React from "react";
// 7- import useEffect from react
import  { useEffect, useState } from "react";
import {Button} from 'react-bootstrap';

let initColor = false
function About() {

  const [color, setColor] = useState("red")
  useEffect(
    () => {
      if (initColor){
        document.body.style.background = "white"
        document.body.style.color ="black"
        initColor =false
      }

      else {
        document.body.style.background = "red"
        document.body.style.color ="white"
        initColor =true
      }

    },
    [color]
  )
   

    
  return (
      <div className="container" align="center">
          <h1>
              About page
          </h1>
          <br></br>
            <Button class="btn btn-secondary" onClick={setColor} > Do not Click me :) </Button>
          <p></p>
  
      </div>
    );
  }

export default About;