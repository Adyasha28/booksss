import React from "react";
import searchBg from "./searchBg.jpg"
// import Navbar from "../Nabvar/Navbar"; // Import the Navbar component

import {GiArchiveResearch} from 'react-icons/gi'
import SearchCard from "./SearchCard";
import { useState } from "react";
import axios from "axios";
import './SearchPage.css'


function Search (){

    const myStyle={ backgroundImage: `url(${searchBg})`,
                height:'100vh'};

    const [search,setSearch]=useState("");
    const [bookData,setBookData]=useState([]);
  
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
          const searchQuery = evt.target.value;
          axios.get(`http://localhost:5000/api/v1/search?title=${searchQuery}`)
            .then(res => setBookData(res.data.data)) // Update the state with the correct data
            .catch(err => console.log(err));
        }
      };
    

  
    

    return(
        <>
        {/* <Navbar />  */}

        <div>
            
        <div className="header" style={myStyle} >
               
               <div className="row1">
                   <h1>A room without books is like<br/> a body without a soul.</h1>
               </div> 
               <div className="row2">
                  <div> <h2>Find Your Book</h2></div> 
                   <div className="search">
                       <input type="text" placeholder="Enter Your Book Name"
                       value={search} onChange={e=>setSearch(e.target.value)}
                       onKeyPress ={searchBook}/>
                      <GiArchiveResearch className="search-icon" onClick={searchBook} size={65} />
                   </div>
                  
               </div>
           </div>

        </div>
          
            <div className="container1">
              {
                    <SearchCard book={bookData}/>
              }  
            </div>
           
        </>
    )
}
export default Search;