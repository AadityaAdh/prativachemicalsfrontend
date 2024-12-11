import React, { useEffect, useState } from 'react'
import './Products.css'


export default function Products(props) {
  const [availableProducts, setAvailableProducts] = useState([]);
  const [colorpalatte, setcolorpalatte] = useState(["#ea3d43", "#7451f4", "#4d98ee"])


  useEffect(() => {
    async function fetchproducts() {
      try {
        const response = await fetch("https://prativachemicalsbackend.onrender.com/products", {
          method: "GET"
        });
        const products = await response.json();
        setAvailableProducts(products)
      }
      catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    fetchproducts()
  },[])
  const [afterthisindex, setafterthisindex] = useState(0);
  const [beforethisindex, setbeforethisindex] = useState(1);
  function subtractby1() {
    const newafter = afterthisindex === 0 ? afterthisindex : afterthisindex - 1;
    const newbefore = beforethisindex === 1 ? beforethisindex : beforethisindex - 1;
    setafterthisindex(newafter);
    setbeforethisindex(newbefore);
    

  }
  function addby1() {
    const newafter = afterthisindex === availableProducts.length - 2 ? afterthisindex : afterthisindex + 1;
    const newbefore = beforethisindex === availableProducts.length - 1 ? beforethisindex : beforethisindex + 1;
    setafterthisindex(newafter);
    setbeforethisindex(newbefore);

  }
  async function handlepaddtocart(itemname, itemprice, itemimage) {
    if (props.isloggedin) {
      const response = await fetch("https://prativachemicalsbackend.onrender.com/persons", {
        method: "PUT",
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({ "cartproducts": [{ "productname": itemname, "productquantity": 1, "price": itemprice, "image": itemimage }], "phone": props.phoneno })
      })

      if (response.ok) {
        alert("Sucessfully added to the cart")
      }
      else {
        alert("We ran in some trouble please try again")
      }


    }
    else {
      alert("Login First")
    }
  }

  return (
    <div className='xyz'>
      <p className='makewhite'>Find the <b>right product for you</b> </p>
      <div className='productx'>
        <div className='divl'>
          <button onClick={subtractby1} className='leftrighticons'>&lt;</button>
        </div>
        <div className='itemx'>
          {availableProducts.map((item, i) => {
            if (i >= afterthisindex && i <= beforethisindex) {
              return (
                <div key={i} className='cardx' style={{ backgroundColor: colorpalatte[i % 3] }} >

                  <br />
                  <div className='cardbackwhite'>
                    <p className="makemegray" style={{ color: colorpalatte[i % 3] }}>{item.name}</p>
                    <p className='carddescription'>{item.description}</p>
                    <img src={item.images} className='itemphotos'></img>

                    <div className="pricestarcontainer">
                      <p><b>RS {item.price}</b></p>
                      <div className='starscontainer'>
                        <i class="fas fa-star" style={{ color: "orange" }}></i>
                        <i class="fas fa-star" style={{ color: "orange" }}></i>
                        <i class="fas fa-star" style={{ color: "orange" }}></i>
                        <i class="fas fa-star" style={{ color: "orange" }}></i>
                        <i class="fas fa-star" style={{ color: "orange" }}></i>

                      </div>







                    </div>







                  </div>


                  <div className='fs'>
                    <button className='addtocart' onClick={() => handlepaddtocart(item.name, item.price, item.images)}>Add To Cart</button>
                  </div>



                </div>

              );

            }

          })}
        </div>
        <div className='divr'>
          <button onClick={addby1} className='leftrighticons'>&gt;</button>
        </div>
      </div>
    </div>
  )
}
