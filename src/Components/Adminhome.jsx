import React from 'react'
import Adminnavbar from './Adminnavbar'

export default function Adminhome(props) {
  return (
    <div>
      {props.allowconent=true?<Adminnavbar/>:alert("cant access")}
        
    </div>
  )
}
