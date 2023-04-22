import styles from "./Card.module.css";
//import { FaStar } from "react-icons/fa"
import React from "react";
import Rating from "../Rating";



const Card = ({title,price,rating,imageURL}) => {
return (

        <div className={styles.proContainer}>
            <div className={styles.pro}>
                <div className={styles.image}>
                <img src={imageURL} alt="pro-f1"/>                  
                    </div>             
                    <div className="des">
                        <span>{title}</span>
                        <h5>{rating}</h5>
                        <div className="star">
                            <Rating rating={rating}/>
                        </div>
                        <h4>Rs. {price}</h4>
                    </div>
                    <button>Add to Cart</button>
                </div>
        </div>
  
)
}
export default Card;