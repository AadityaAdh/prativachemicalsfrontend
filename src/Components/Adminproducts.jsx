import React, { useEffect, useState } from 'react'
import './Adminproducts.css'



export default function Adminproducts() {
    const [availableProducts, setAvailableProducts] = useState([]); // State for products

    
      useEffect(()=>{
        async function fetchproducts(){
          try{
            const response=await fetch("https://prativachemicalsbackend.onrender.com/products",{
              method:"GET"
            });
            const products=await response.json();
            setAvailableProducts(products)
          }
          catch (error) {
            console.error('Error fetching product data:', error);
          }
        }
        fetchproducts()
      },[])

      async function handkeadmindeleteproduct(iid){
        try{
          const response=await fetch(`https://prativachemicalsbackend.onrender.com/products/deleteProducts?id=${iid}`,{
            method:"DELETE"
          });
          
          
        }
        catch (error) {
          console.error('Error fetching product data:', error);
        }
        
      }
  return (
    <div className='admin_product_container'>
      {
        availableProducts.map((itemss,i)=>{
          
            return (
                <div key={i} className='admin_product_horizontal_card'>
                    <img src={itemss.images} className='admin_product_img'></img>
                    <div className='admin_product_description'>
                        <p>{itemss.price}</p>
                        <p>{itemss.name}</p>
                        <p>{itemss.description}</p>
                    </div>
                    <button className='admin_product_addtocart' onClick={()=>handkeadmindeleteproduct(itemss._id)}>Delete</button>

                </div>
            )
        })
      }
    </div>
  )
}
