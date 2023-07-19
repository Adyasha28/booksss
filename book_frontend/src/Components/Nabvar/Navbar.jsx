import React from "react";
import {Link} from 'react-router-dom';
import "./navbar.css"
import { BsFillBookFill } from 'react-icons/bs';
import { useState } from "react";
import {AiOutlineBars} from "react-icons/ai";



function Navbar(){

  const[color,setColor] = useState(false)
  const changeColor = () =>{
      if(window.scrollY >= 100)
        {setColor(true);}
        else {setColor(false);}
  };
    window.addEventListener("scroll",changeColor);
    return(
    <div className="menu">
      
        <div className="Navbar">
        
        <div className="">
           <nav className={color?'main2':'main1'}>
             <div className="link"> 
                   <div className="port"  >
                       <Link to="/" >
                       <h2 className="heading"><BsFillBookFill size={35} className={color?"log1":"log"} /></h2></Link> 
                   
               <ul>
                 <li>
                 <Link to='/home' className={color?"navigation1":"navigation"}>Home </Link> 
                 </li>
                 <li>
                 <Link to='./search' className={color?"navigation1":"navigation"}>Search </Link>
                 </li>
                 <li>
                 <Link to='./Wishlist' className={color?"navigation1":"navigation"}>Favourites</Link>
                 </li>
                 <li>
                 <Link to='./Register' className={color?"navigation1":"navigation"}>Login </Link>
                 </li>
               </ul>
               </div>
             </ div>
             </ nav>
                  
             </div>
             <div className="position"> <AiOutlineBars size={50} className="hamburger"/></div>
           </div>
          
         
    </div>
     
          

         
        
    

    );
}

export default Navbar;