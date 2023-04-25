import styles from "./Card.module.css";
//import { FaStar } from "react-icons/fa"
import React from "react";
import Rating from "../Rating";
import { useStateValue } from "../StateProvider";



const Card = (props) => {
    const {title,address,timings,rating,imageURL} = props;
    const { myReducer } = useStateValue();
    const [,dispatch] = myReducer;
    const clickHandler = (selectedValue) => {
        const timeStamp = new Date().getTime();
        console.log(timeStamp);
        selectedValue = { ...selectedValue, id:timeStamp};
         
        dispatch({
            type:'ADD_TO_CART',
            payload: selectedValue
        })
    }
return (

        <div className={styles.proContainer}>
            <div className={styles.pro}>
                <div className={styles.image}>
                <img src={imageURL} alt="pro-f1"/>                  
                    </div>             
                    <div className="des">
                        <h5>{title}</h5>
                        <span>{address}</span>
                        <div className="star">
                            <Rating rating={rating}/>
                        </div>
                        <h4>{timings}</h4>
                    </div>
                    <button onClick={() => clickHandler(props)}>Add to Favourites </button>
                </div>
        </div>
  
)
}
export default Card;