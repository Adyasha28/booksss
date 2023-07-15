import React from "react";
import './characteristics.css'

function CreateChar(props){
    return(
        
            <div className="card" >
               
    <img src={props.imgSrc} alt="img" id="card" className="card-image"/>
    <div className="card-content">
        <div className="" > <h3 className="tit">{props.title}</h3></div>
        <div className="desc"> <p>{props.description}  </p></div>
</div>
</div>
    )
}
export default CreateChar;