import React, { useState } from 'react'
import './Aboutus.css'
import { useNavigate } from 'react-router-dom';




export default function Aboutus() {
  const navigate = useNavigate();
  const [wcos, changewcos] = useState({ height: "100vh", width: "100%" });

  function handlebackabout(){
    navigate("/")

  }

  return (
    <div className='aboutcontainer'>
      
        
      
    <div className='wco' style={wcos}>
    <div><i class="fa-solid fa-circle-arrow-left" style={{color:"skyblue",fontSize:"50px",marginRight:"50px"}} onClick={handlebackabout}></i></div>
    
      <img src='./Prativa.png' alt='Prativa Chemicals' />
      <p className='aone'>
      <strong>PRATIVA CHEMICALS</strong>  is a leading name in premium detergent powders, known for innovation, <strong>quality</strong>, and sustainability. Committed to providing superior cleaning while protecting fabrics and the environment, Sparkle offers advanced formulas, including hypoallergenic, high-efficiency, and eco-friendly options. With a strong focus on research and development, the brand incorporates <strong>cutting-edge technology</strong>, such as advanced enzymes and biodegradable ingredients, into its products. Dedicated to sustainability, Sparkle minimizes its environmental footprint through responsible sourcing, recyclable packaging, and water- and energy-efficient manufacturing. A customer-centric approach and active community engagement further reflect the company’s mission to deliver <strong>exceptional laundry solutions</strong> while contributing to a greener future. 
      </p>
    </div>
    <div className='wco' style={wcos}>
    <div><i class="fa-solid fa-circle-arrow-left" style={{color:"skyblue",fontSize:"50px",marginRight:"50px"}} onClick={handlebackabout}></i></div>
      <img src='./Bijayv.jpg' alt='Bijay Bhattrai' />
      <p className='atwo'>
        I am <strong>Bijay Bhattrai</strong>, a pharmacist.
      </p>
    </div>
    <div className='wco' style={wcos}>
    <div><i class="fa-solid fa-circle-arrow-left" style={{color:"skyblue",fontSize:"50px",marginRight:"50px"}} onClick={handlebackabout}></i></div>
      <img src='./Aaditya.jpg' alt='Aaditya Adhikari' />
      <p className='athree'>
        I am <strong>Aaditya Adhikari</strong>, a computer engineering graduate with expertise in
        <strong>machine learning</strong>, <strong>data analysis</strong>, and <strong>web development</strong>. I've worked on
        impactful projects such as a <strong>face recognition</strong> system with classification
        and bounding box detection, applicable in areas like automated attendance
        and security. I also developed a <strong>GAN-based model</strong> for traffic sign generation
        and recognition, pushing AI's role in safety and infrastructure.
        My airline reservation system project gave me hands-on experience in
        creating user-friendly applications, and my interactive Hangman game taught
        me about <strong>game development</strong>. Actively freelancing, I apply my Python and
        data analysis skills to solve real-world problems. My goal is to
        continuously learn, take on new challenges, and make a meaningful impact
        with innovative, high-quality results.
      </p>
    </div>
    </div>
  )
}
