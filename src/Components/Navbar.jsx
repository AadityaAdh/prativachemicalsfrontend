import React, { useState } from 'react'
import './Navbar.css'
import Ending from './Ending';
import Products from './Products';
import Slider from './Slider';
import Shop from './Shop';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';
import Orders from './Orders';

export default function Navbar() {
  const navigate = useNavigate();
  const [isloggedin, setisloggedin] = useState(false);
  const [username, setusername] = useState('');
  const [phoneno, setphoneno] = useState('');
  
  const [showproducts, setshowproducts] = useState(false);
  const [showcarts, setshowcarts] = useState(false);
  const [showorders, setshoworders] = useState(false);
  const [searchtextvalue,setsearchtextvalue]=useState()

  const aboutregex = /\babout\b/i;
  const regexShop = /\bshop\b/i;
  const regexCart = /\bcart\b/i;
  const regexOrder = /\border\b/i;
  const regexLogin = /\blogin\b/i;
  const regexLocation = /\blocation\b/i;
  const regexContact = /\bcontact\b/i;


  

  function display() {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.slider1_content').style.display = 'none';
    document.querySelector('.slider_radios').style.display = 'none';
  }
  function hide() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.slider1_content').style.display = 'block';
    document.querySelector('.slider_radios').style.display = 'block';
  }
  function shopp() {
    if (!isloggedin) {
      alert("Login First");
    }
    else {
      setshowproducts(true);
      setshowcarts(false);
      setshoworders(false);
    }
  }
  function mycart(){
    if (!isloggedin) {
      alert("Login First");
    }
    else {
      setshowproducts(false);
      setshowcarts(true);
      setshoworders(false);

    }
  }

  function handleSubmit(event){
    event.preventDefault();
    
    async function handler(){
      const response = await fetch("https://prativachemicalsbackend.onrender.com/persons/new",{
        method:"POST",
        headers:{
          'content-Type':'application/json'
      },
      body:JSON.stringify({name:username,phone:phoneno})
      })
      if(response.ok){
        setisloggedin(true)
        hide()
        alert("Login sucessfull")
  
      }
    }
    let stringofnumber=String(phoneno)
    const phonenoregex = /^98\d+/;
    if(!isNaN(phoneno)&&phoneno.length===10&&username.length>=3&&phonenoregex.test(stringofnumber)){
      if(phoneno==9811111111 && username=="Bijay"){
        navigate('/adminhome')
      }
      else{
      handler()
      }
      
    }
    else{
      alert("invalid credentials")
    }
    
    
  }

  function handlehome(){
    setshowproducts(false);
    setshowcarts(false);
    setshoworders(false);


  }

  function handleorders(){
    if(!isloggedin){
      alert("Login First")
    }
    else{
      setshowproducts(false);
      setshowcarts(false);
      setshoworders(true);
      
    }
  }

  function handleseachkeyup(e){
    if(e.key==='Enter'){
      if (aboutregex.test(searchtextvalue)) {  // Test the value against the regex
        navigate('/aboutus')
      }
      else if (regexCart.test(searchtextvalue)) {  // Test the value against the regex
        mycart()
      }
      else if (regexShop.test(searchtextvalue)) {  // Test the value against the regex
        shopp()
      }
      else if (regexLogin.test(searchtextvalue)) {  // Test the value against the regex
        display()
      }
      else if (regexOrder.test(searchtextvalue)) {  // Test the value against the regex
        handleorders()
      }
      else if (regexContact.test(searchtextvalue)) {  // Test the value against the regex
        window.location.href = "https://www.facebook.com";
      }
      else if (regexLocation.test(searchtextvalue)) {  // Test the value against the regex
        window.location.href = "https://www.google.com/maps?client=safari&sca_esv=8c0522df0eeb32de&rls=en&output=search&q=banepa+google+maps&source=lnms&fbs=AEQNm0DnxlUsubaCkEwI9RemfLAQZc5nOUuhPjnJ0CTKxNpJgxyMnrb79_UCFS9HJ6POGFKsKtHpBatz9bG9S2zqkzl-k6i7uZCXE35njzh_mtWfkcgM1bilppeXkgYOfa4c6xAd7frqm3oNCMCEVxu9NUNlbCg3Km6ngWPMvw8I0Xn72kvRSV6mc7sXpyWKBZ3_k4gS-9Wqgcxlfc_OpwHLz46_uDcbLg&entry=mc&ved=1t:200715&ictx=111";
      }
      else{
        alert("Could not find anything related to your search.");
      }


      
    }
  }
  return (
    <div className='navbar'>
      <div className='nav_upcontainer'>
        <div className='box_logo'>
          <p className='nav_logo'><b className='blue_text'>P</b>rativa <b className='blue_text'>C</b>hemicals</p>
        </div>
        <div className='box_search'>
          <input type='text' className='search' placeholder='        Search...' value={searchtextvalue} onChange={(e)=> setsearchtextvalue(e.target.value)} onKeyUp={handleseachkeyup}></input>
        </div>
        <div className='box_login' onClick={display} >

          <img src='user.png' className='userphoto'></img>
          {isloggedin ? (
            <p>{username}</p>
          ) : (<p>Login</p>)}

        </div>
      </div>
      
      <div className='nav_downcontainer'>
      
        
        <ul className='nav_links'>
          <li className='hhome'><a href='#' className='home' onClick={handlehome}>Home</a></li>
          <li className='jpp'>
          <a className='products' onClick={shopp} id='products'>Shop</a>

            
            
          </li>
          <li className='ssuggestion'><a href='#' className='suggestion' onClick={mycart}>Cart</a></li>
          <li className='oorders'><a href='#' className='orders' onClick={handleorders}>Orders</a></li>
          <li ><a href='#' className='about_us' onClick={()=>navigate('/aboutus')}>About</a></li>
          {!isloggedin?(<li><a href='#' className='contact_us' onClick={display}>Login</a></li>):<li></li>}
          
          
        </ul>
        

      </div>
      <div class="popup">
        <div className='left_popup' onClick={hide}></div>
        <div className='right_popup' onClick={hide}></div>
        <div className='up_popup' onClick={hide}></div>
        <div className='down_popup' onClick={hide}></div>
        <div class="popup-content" onClick={display}>
          <div class="ram" >
            <img src="user.png" class="avatar"></img>
            <h1 class="hari"> Login  </h1>
            <form method="POST" onSubmit={handleSubmit} >
              <p> UserName </p>
              <input type="text" name="name" placeholder="Enter Username" value={username} onChange={(e)=>{setusername(e.target.value)}}></input>
              <p> Phone no </p>
              <input type="text" name="password" placeholder="Enter Phoneno" value={phoneno} onChange={(e)=>{setphoneno(e.target.value)}}></input>
              
              <input type="submit" value="Login"></input>
              <p className='notelogin'>New users will be registered automatically</p>






            </form>


          </div>
        </div>
      </div>
      {
        showproducts ? (<Shop pho={phoneno} />) : showcarts? (<Cart pho={phoneno} />):showorders?(<Orders pho={phoneno} />):(<div>
          <Slider />
          <Products isloggedin={isloggedin} phoneno={phoneno}/>

        </div>)
      }
      

      <Ending />
    </div>
  )
}
