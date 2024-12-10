import React, { useState } from 'react'
import './Slider.css'

export default function Slider() {
    
    const imageurl=[
      {url:'/wall1.jpg',title:'wall1'},
      {url:'/wall2.png',title:'wall1'}
    ]
    const [currentindex,setcurrentindex]=useState(0);
    const slider_background={
      backgroundImage:`url(${imageurl[currentindex].url})`
    }
    function gotoprev(){
      const newindex=currentindex===0?imageurl.length-1:currentindex-1;
      setcurrentindex(newindex);
    }
    function gotonext(){
      const newindex=currentindex===imageurl.length-1?0:currentindex+1;
      setcurrentindex(newindex);
    }
    function handlelearnmore(){
      window.scroll({
        top: 500,
        left: 0,
        behavior: 'smooth'
      });
    }

    
  return (
    <div className='slider_container'>
      <div className='slider1' style={slider_background} >
      <div className='slider1_content' >
          <p>DISCOVER<br/><b>OUR BEST</b><br/> <b>PRODUCTS</b></p>
          <button onClick={handlelearnmore}>&nbsp;Learn More</button>
        </div>
        <div className='slider_radios'>
          <input type='radio' name='wall' id='wall1' className='wall1' onClick={gotoprev} ></input>
          <input type='radio' name='wall' id='wall2' className='wall2' onClick={gotonext} ></input>
        </div>
      </div>
      
    </div>
  )
}
