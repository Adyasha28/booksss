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
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. aboris nisi ut aliquip ex ea commodo consequat.</p>
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
            <p><a href="simunsarangi0912@gmail.com"> <div><AiFillMail className="mail" size={35} /></div> <div className="m">Mail</div> </a></p>
          </div>
        </div>
        </footer>
      </div>
    );
}

export default Footer;