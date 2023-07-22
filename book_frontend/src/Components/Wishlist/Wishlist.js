import React from 'react';
import {BsFillBookmarkHeartFill,BsFillBookmarkXFill} from 'react-icons/bs';
import { useAppContext } from "../Context/appcontext";
import '../Wishlist/Wishlist.css';
// import Navbar from "../Nabvar/Navbar"; // Import the Navbar component

const Wishlist = () => {

    const {favourites,addToFavourites,removeFromFavourites} = useAppContext();
    console.log('favourites are',favourites);
    
    const favouritesChecker  = (id) => {
        const boolean = favourites.some((item) => item.id === id);
        return boolean;
    };

  return (
   <>
    {/* <Navbar />  */}

    {
           favourites.length > 0 ?  favourites.map((item) => {
                    let thumbnail=item.image ;
                    let amount=item.price;
                    if(thumbnail!== undefined && amount !== undefined)
                    {
                        return (
                            <div className='favourites'>
                            
                            <div className="favcard">
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                   
                                </div>
                              <div>
                              {favouritesChecker(item.id) ? (
                                    <button className="favourite" onClick={() => removeFromFavourites(item.id)}>
                                      <BsFillBookmarkXFill size={30}  />
                                 </button>
                                ) : (
                                   <button className="favourite" onClick={() => addToFavourites(item)}>
                                  <BsFillBookmarkHeartFill size={30}  />
                                 </button> 
                                ) }
                           
                              </div>
                            </div>
                           
                             
                            </div>
                        )
                    }
                    
                }) : <h1>YOU DONT HAVE ANY FAVOURITES</h1>
            }
   </>
  )
}

export default Wishlist;