import React, { useEffect, useState } from 'react'
import './Adminnorders.css'

export default function Adminnorders() {
    const [retrived,setretrived]=useState([])
    useEffect(()=>{
        async function getallorders(){
            const response=await fetch("https://prativachemicalsbackend.onrender.com/persons/getallOrders",{
                method:"GET"

            })
            if(response.ok){
                let alldata=await response.json();
                setretrived(alldata.result)

            }
        }
        getallorders()
    },[])
  return (
    <div className='adminorderscontainer'>
  {retrived.map((item, index) => {
    return (
      <div key={index}>
        
        
        <h1>{item.name}</h1>
        
        {item.orderedproducts.map((value,i)=>{
            return(
                <p>Ordered item:{value[0].productname} &nbsp; &nbsp; Ordered Quantity:{value[0].productquantity}</p>
            )
        })}

        <p>Total amount to receive:{item.price}</p>
        <hr/>
      </div>
    );
  })}
</div>

  )
}
