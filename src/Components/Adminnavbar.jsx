import React from 'react'
import './Adminnavbar.css'
import { useNavigate } from 'react-router-dom';


export default function Adminnavbar() {
    const navigate = useNavigate();

    function handleadminhome(){
        navigate("/adminhomecontent")
        
    }
    function handleadminorders(){
        navigate("/adminorders")


    }
    function handleadminproducts(){
        navigate("/adminproducts")


    }
    function handleadminadd(){
        navigate("/adminadd")


    }
    function handleadminanalytics(){
        alert("Unavailable at the moment")
    }


  return (
    <div>
      <div className='adminnavbarcontainer'>
        <ul>
            <li onClick={handleadminhome}>Home</li>
            <li onClick={handleadminorders}>Orders</li>
            <li onClick={handleadminproducts}>Products</li>
            <li onClick={handleadminadd}>Add</li>
            <li onClick={handleadminanalytics}>Analytics</li>



        </ul>
      </div>
    </div>
  )
}
