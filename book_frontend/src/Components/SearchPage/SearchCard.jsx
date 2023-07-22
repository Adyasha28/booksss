import React from "react";
import './SearchPage.css';
import { BsFillBookmarkHeartFill, BsFillBookmarkXFill } from 'react-icons/bs';
import { useAppContext } from "../Context/appcontext";
import '../Characteristics/characteristics.css';
import Modal from "../modals/Modal";
import { useState } from "react";

const SearchCard = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    const { favourites, addToFavourites, removeFromFavourites } = useAppContext();
    
    console.log('favourites are', favourites);

    const favouritesChecker = (id) => {
        const boolean = favourites.some((item) => item.id === id);
        return boolean;
    };

    if (!Array.isArray(book)) {
        return null; // Return null if book is not an array
    }

    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.image ;
                    let amount = item.price ;
                    if (thumbnail !== undefined && amount !== undefined) {
                        return (
                            //unique key needed
                            <div key={item.id}> 
                                <div className="card1" >
                                    <img src={thumbnail} alt="img" id="card" className="card1-image" onClick={() => { setShow(true); setItem(item) }} />
                                    <div className="card-content"  >
                                        <div className="" > <h3 className="tit">{item.title}</h3></div>
                                        <div className="desc"> <p>&#8377;{amount}  </p></div>

                                        <div className="fav-btn">
                                            {favouritesChecker(item.id) ? (
                                                <button className="favourite" onClick={() => removeFromFavourites(item.id)}>
                                                    <BsFillBookmarkXFill size={30} />
                                                </button>
                                            ) : (
                                                <button className="favourite" onClick={() => addToFavourites(item)}>
                                                    <BsFillBookmarkHeartFill size={30} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
                            </div>
                        )
                    }
                    else {
                        return null;
                    }
                })
            }
        </>
    )
}
export default SearchCard;
