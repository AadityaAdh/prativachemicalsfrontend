import React, { useEffect, useState } from 'react'
import './Shop.css'


export default function Shop(props) {
  const [availableProducts, setAvailableProducts] = useState([]);
  const [colorpalatte,setcolorpalatte]=useState(["#ea3d43","#7451f4","#4d98ee"])


    
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



      async function handleaddtocart(itemname,itemprice,itemimage){
        const response= await fetch("https://prativachemicalsbackend.onrender.com/persons",{
          method:"PUT",
          headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({"cartproducts":[{"productname":itemname,"productquantity":1,"price":itemprice,"image":itemimage}],"phone":props.pho})
        })

        if(response.ok){
          alert("Sucessfully added to the cart")
        }
        else{
          alert("We ran in some trouble please try again")
        }


      }


  return (
    <div className='outer_shop_container'>
    <div className='shop_container'>
      
      {
        availableProducts.map((itemss,i)=>{
          
            return (
                <div key={i} className='horizontal_card' style={{backgroundColor:colorpalatte[i%3]}}>
                  <br/>
                  <br/>

                  <div className='productcardbackwhite'>
                  <p className='productitemname' style={{ color: colorpalatte[i % 3] }}>{itemss.name}</p>
                  <p className='productdescription'>{itemss.description}</p>
                  
                    <img src={itemss.images} className='shop_product_img'></img>
                  
                    
                    <div className="productpricestarcontainer">
                      <p><b>RS {itemss.price}</b></p>
                      <div className='productstarscontainer'>
                        <i class="fas fa-star" style={{ color: "orange" }}></i>
                        <i class="fas fa-star" style={{ color: "orange" }}></i>
                        <i class="fas fa-star" style={{ color: "orange" }}></i>
                        <i class="fas fa-star" style={{ color: "orange" }}></i>
                        <i class="fas fa-star" style={{ color: "orange" }}></i>

                      </div>







                    </div>

                    </div>
                        
                        
                    <div className='productfs'>
                    <button className='shop_addtocart' onClick={()=>{handleaddtocart(itemss.name,itemss.price,itemss.images)}}>Add To Cart</button>
                    </div>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}
