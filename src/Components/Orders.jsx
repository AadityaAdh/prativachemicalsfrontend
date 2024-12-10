import React, { useEffect, useState } from 'react'
import './Orders.css'

export default function Orders(props) {
    const [myorders,setorders]=useState([])
    const [price,setprice]=useState()
    const [myquantity,setmyquantity]=useState()
    const [myname,setmyname]=useState()
    const [myid,setmyid]=useState()
    const [x,setx]=useState()

    useEffect(()=>{
        async function getinitialprice(){
            const response=await fetch(`https://prativachemicalsbackend.onrender.com/persons/getPrice?phone=${props.pho}`,{
                method:"GET",

            })
            
            if(response.ok){
                let p=await response.json();
                let pr=p.price
                setprice(pr)
    
                
            }
        }
        getinitialprice()
        document.querySelector('.updatecontainer').style.display = 'none';

    },[x])

    
    useEffect(()=>{
        async function getorders(){
            const response=await fetch(`https://prativachemicalsbackend.onrender.com/persons/getorders?phone=${props.pho}`,{
                method:"GET",

            })
            
            if (response.ok){
                const myorderss=await response.json()
                
                setorders(myorderss.orderedproducts)
            }
            else{
                alert("something went wrong try again later")
            }
        }
        getorders()
        
    },[price,x])

    async function handledelete(id){
        const response = await fetch(`https://prativachemicalsbackend.onrender.com/persons/deleteorders?id=${id}&phone=${props.pho}`, {
            method: "DELETE",
            
        });
        if(response.ok){
            let p=await response.json();
            let pr=p.price
            setprice(pr)

            
        }
    }
    function handleupdate(n,q,i){
        setmyname(n)
        setmyquantity(q)
        setmyid(i)

        document.querySelector('.updatecontainer').style.display = 'flex';
    }

    async function handlefinalupdate(qty){
        if(!isNaN(qty) && qty<=15){
        const response = await fetch(`https://prativachemicalsbackend.onrender.com/persons/updateOrders?id=${myid}`,{
            method:"PUT",
            headers:{
              'content-Type':'application/json'
          },
          body:JSON.stringify({phone:props.pho,quantity:qty})
          })
          if(response.ok){
            let da= Date.now()
            setx(da)
            document.querySelector('.updatecontainer').style.display = 'none';


          }

        }
        else{
            alert("enter valid number")

        }

    }
  return (
    <div className='orderscontainer'>
        <h1 className='ordertitle'>Your Orders - {myorders.length} items</h1>
                <table className='order_table'>
                    <thead>
                        <tr className='orderheaders'>
                            <td className='i1'>Item</td>
                            
                            <td className='i3'>Quantity</td>
                            <td className='i4'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {myorders.map((item, i) => (
                            <tr key={i}>
                                <td className='order_item_description'>
                                    
                                    <p>{item[0].productname}</p>
                                </td>
                                
                                <td className='quan_box1'>
                                    <div className='quantity_box1'>
                                        
                                        <p>{item[0].productquantity}</p>
                                        
                                    </div>
                                </td>
                                <td className='actionbuttoncontainer'>
                                    <button className='updatebutton' onClick={()=>handleupdate(item[0].productname,item[0].productquantity,item[0]._id)}>Update</button>
                                    <button className='cancelbutton' onClick={()=>handledelete(item[0]._id)}>Cancel</button>
                                    
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>Total: {price}</p>


                <div className='updatecontainer'>
                    <div className='circularcontainer1'></div>
                    <div className='circularcontainer2'></div>
                    <div className="insideupdatecontainer">
                        <div className='leftsideupdate'>
                            <img src='Bijayv.jpg' ></img>
                            <h1>Bijay Bhattrai</h1>
                            <p>"गज्जबको छ, ढुक्क भइ लिनुहोस्।" 
                            </p>
                        </div>
                        <div className='rightsideupdate'>
                            <h1>{myname}</h1>
                            <tr>
                                <td>Quantity</td>
                                <td><input type='text' value={myquantity} onChange={(e)=>setmyquantity(e.target.value)}></input></td>
                            </tr>

                            <button onClick={()=>handlefinalupdate(myquantity)} >Update</button>
                            


                        </div>
                    </div>
                    
                </div>
      
    </div>
  )
}
