import React from "react";
import image from "./bg.jpeg"
import "./landingpage.css"
import Characteristics from "../Characteristics/characteristics";
import Footer from "../Footer/Footer";

function LandingPage(){
    return(

        <div>
         <div className="container">
         <div className="left">
                <div className="box1"> <h1 className="head1">Books</h1></div>
                <div className="box2"> <h1 className="head2">Voyage</h1></div>
                <div className="para"> <p className="intro"> Dive in Through the Voyage of Infite..Review your favourite books, 
                    save them for later ,chat with geeks and much more.</p></div>   
                <div className="btn"> <button> Get Started</button></div>
         </div>
            <div className="right">
                <div className="image"> <img src={image} className="picture" alt="books" />
                </div>
            </div>
         </div>
            

            <Characteristics />
            <Footer />
        </div>

    );
}
export default LandingPage;