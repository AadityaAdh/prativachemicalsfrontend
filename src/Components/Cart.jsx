import React, { useEffect, useState } from 'react';
import './Cart.css';

export default function Cart(props) {
    const [cartitems, setcartitems] = useState([]);

    useEffect(() => {
        async function fetchCartItems() {
            try {
                const response = await fetch(`https://prativachemicalsbackend.onrender.com/persons/getcart?phone=${props.pho}`, {
                    method: "GET",
                });
                if (response.ok) {
                    const cartitem = await response.json();
                    setcartitems(cartitem.cartproducts);
                } else {
                    console.error("Failed to fetch cart data.");
                }
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        }
        

        fetchCartItems();
    }, [props.pho]);

    let total = cartitems.reduce((sum, item) => sum + item.price * item.productquantity, 0);
    let tax = 0; 

    async function handlecheckout(){
        if(cartitems.length>0){

        const minimalCartItems = cartitems.map(item => ({
            productname: item.productname,
            productquantity: item.productquantity,
        }));

        const response = await fetch("https://prativachemicalsbackend.onrender.com/persons/checkout",{
            method:"PUT",
            headers:{
              'content-Type':'application/json'
          },
          body:JSON.stringify({"phone":props.pho,"cartitems":minimalCartItems,"price":total+tax})
          })
          if(response.ok){
            alert("Sucessfully placed the order you will be receiving a phone call very soon")
            setcartitems([])
            

          }
        }
        else{
            alert("Nothing in the cart to place order")
        }
    }

    function subtractor(j) {
        setcartitems(prevItems =>
            prevItems.map((item, i) => {
                if (i === j) {
                    const newQuantity = Math.max(0, item.productquantity - 1);
                    return { ...item, productquantity: newQuantity };
                }
                return item;
            })
        );
    }

    function adder(j) {
        setcartitems(prevItems =>
            prevItems.map((item, i) => {
                if (i === j) {
                    return { ...item, productquantity: item.productquantity + 1 };
                }
                return item;
            })
        );
    }

    return (
        <div className='cart_container'>
            <div>
                <h1 className='description'>Your cart - {cartitems.length} items</h1>
                <table className='cart_table'>
                    <thead>
                        <tr className='test'>
                            <td className='i1'>Item</td>
                            <td className='i2'>Price</td>
                            <td className='i3'>Quantity</td>
                            <td className='i4'>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cartitems.map((item, i) => (
                            <tr key={i}>
                                <td className='item_description'>
                                    <img src={item.image} alt={item.productname} className='cart_img' />
                                    <p>{item.productname}</p>
                                </td>
                                <td className='i5'>Rs {item.price}</td>
                                <td className='quan_box'>
                                    <div className='quantity_box'>
                                        <button className='imleft' onClick={() => subtractor(i)}>-</button>
                                        <p>{item.productquantity}</p>
                                        <button className='imright' onClick={() => adder(i)}>+</button>
                                    </div>
                                </td>
                                <td className='i6'>Rs {item.price * item.productquantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='cart_total'>
                    <table width='50%'>
                        <tbody>
                            <tr>
                                <td className='i7'>Subtotal:</td>
                                <td className='i8'>Rs {total.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className='i7'>Delivery charge:</td>
                                <td className='i8'>Rs {tax.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className='i7'>Total:</td>
                                <td className='i8'>Rs {(total).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button className='cart_checkout' onClick={handlecheckout}>Checkout</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
