import React from "react";
import {data} from "./data"
import "./characteristics.css"
import CreateChar from "./createchar";
import './characteristics.css'

function Characteristics(){

  function CreateCards(term){
    return(
       <div >
             <CreateChar
         key={term.id}
         imgSrc={term.imgUrl}
         title={term.title}
         description={term.description}
       />
       </div>
    );
    }    

       return(
         <>
                 <div className="hed"> <div><h1 className="name">Characteristics</h1></div>
   
   </div>
                 <div className="mapped">
                   {data.map(CreateCards)}
                 </div>
         </>
            );
}
export default Characteristics;