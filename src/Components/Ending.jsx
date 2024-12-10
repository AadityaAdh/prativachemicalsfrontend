import React from 'react'
import './Ending.css'
import { useNavigate } from 'react-router-dom';


export default function Ending() {
    const navigate = useNavigate();
    function displaylogin(){

        //vanae xi class,id haru jun componenet ko jun ma ni access garna mildo raixa
        //tara yei function aarko ma vane refer garna paidaina aarko componenet le yo function chindaina

    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.slider1_content').style.display = 'none';
    document.querySelector('.slider_radios').style.display = 'none';
    }

    function focusshop(){
        window.scrollTo({
            top: 0,      
            behavior: 'smooth', 
          });
    }

    return (
        <div className='ending_container'>
            <table className='ending_table'>
                <tr className='underline'>
                    <th><p>Pages</p></th>
                    <th><p>Services</p></th>
                    <th><p>Contacts</p></th>
                    <th><p>Socials</p></th>
                </tr>
                <tr>
                    <th onClick={displaylogin} className='endingaboutusth'>Login</th>
                    <th>FeedBack</th>
                    <th onClick={()=>navigate("/aboutus") } className='endingaboutusth'>About Us</th>
                    <th><a href='http://facebook.com' target='_blank'>Facebook</a></th>
                </tr>
                <tr>
                    <th onClick={focusshop} className='endingaboutusth'>Shop</th>
                    <th></th>
                    <th><a href='https://www.google.com/maps?client=safari&sca_esv=8c0522df0eeb32de&rls=en&output=search&q=banepa+google+maps&source=lnms&fbs=AEQNm0DnxlUsubaCkEwI9RemfLAQZc5nOUuhPjnJ0CTKxNpJgxyMnrb79_UCFS9HJ6POGFKsKtHpBatz9bG9S2zqkzl-k6i7uZCXE35njzh_mtWfkcgM1bilppeXkgYOfa4c6xAd7frqm3oNCMCEVxu9NUNlbCg3Km6ngWPMvw8I0Xn72kvRSV6mc7sXpyWKBZ3_k4gS-9Wqgcxlfc_OpwHLz46_uDcbLg&entry=mc&ved=1t:200715&ictx=111' target='_blank'>Location</a></th>
                    <th><a href='http://instagram.com' target='_blank'>Instagram</a></th>
                </tr>


            </table>
            <div className='ending_end'>
                <p>Developed by:Aaditya Adhikari</p>
                <p>&copy; Prativa Chemicals</p>
            </div>


        </div>
    )
}
