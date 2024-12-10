import React, { useState } from 'react'
import './Adminadd.css'

export default function Adminadd() {
    const[name,setname]=useState()
    const[description,setdescription]=useState()
    const[price,setprice]=useState()
    const[stock,setstock]=useState()
    const[images,setimages]=useState("/product3.jpg")


    async function handlenewproductsubmit(e){
        e.preventDefault();
        if(name.length>=3 && description.length>5 && description.length<15 && !isNaN(price) && !isNaN(stock)){
        const response = await fetch("https://prativachemicalsbackend.onrender.com/products/new",{
            method:"POST",
            headers:{
              'content-Type':'application/json'
          },
          body:JSON.stringify({name:name,description:description,price:price,images:images,stock:stock})
          })
        if(response.ok){
            alert("sucessfully created product")
            setname("")
            setdescription("")
            setprice("")
            setstock("")
            setimages("")

        }
    }
    else{
        alert("invalid credentials")
    }

    }

    function handleimageselection(){
        let myv=document.getElementById("myimages").value;
        setimages(myv);
    }




  return (
    <div className='adminaddcontainer'>
        <form onSubmit={handlenewproductsubmit} className='adminaddform'> 
            <label>Name:</label>
            <input type='text' value={name} onChange={(e)=>setname(e.target.value)} required></input>
            <br></br>
            <label>Description:</label>
            <textarea value={description} onChange={(e)=>setdescription(e.target.value)} required></textarea>
            <br></br>

            <label>Price:</label>
            <input type='text' value={price} onChange={(e)=>setprice(e.target.value)} required></input>
            <br></br>

            <label>Select image:</label>

            <select name="myimages" id="myimages" required onChange={handleimageselection}>
            <option value="/product1.jpg">Sparkle</option>
            <option value="/product2.jpg">Harpic</option>
            <option value="/product3.jpg">Sattu</option>
            
            </select>

            <label>Stock:</label>
            
            <input type='text' value={stock} onChange={(e)=>setstock(e.target.value)} required></input>
            <br></br>

            <button type='submit'>Submit</button>
            





        </form>
      
    </div>
  )
}
