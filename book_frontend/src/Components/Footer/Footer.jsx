import React from "react";
import './footer.css'
import {FaDiscord,FaInstagram,FaYoutube} from 'react-icons/fa' ;
import {AiFillMail} from 'react-icons/ai'

function Footer (){
    return(
      <div id="footer">
       <footer>
        <div className="footer" id="">
          <div className="footer-about">
            <h3>Book Critique</h3>
            <div className="descp">
            "Book Critique is a platform that celebrates the joy of reading and fosters a community of book enthusiasts.  Our platform offers a space for lively discussions, where readers can share their thoughts and connect with like-minded individuals. Join Book Critique to discover new books, expand your reading horizons, and be part of a vibrant community passionate about the written word. Happy reading!
            </div>
            
          </div>

          
          <div className="footer-social">
            <h3 className="follow" >Follow Me</h3>
            <div className="footer-social-icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          
          <div className="footer-contact">
            <h3>Review</h3>
            <p><a href="samaladyasha07@gmail.com"> <div><AiFillMail className="mail" size={35} /></div> <div className="m">Mail</div> </a></p>
          </div>
        </div>
        </footer>
      </div>
    );
}

export default Footer;