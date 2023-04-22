import styles from './Cart.module.css'
import { useStateValue } from '../StateProvider'

const Cart = () => {
    const { myReducer } = useStateValue();
    const [state, dispatch] = myReducer; 

    const clickHandler = (id) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payoad:id
        })
    }

    return (<div className={styles.cart}>
            <h2> Your Favourite Places</h2>
            <hr />
            <ul className='list'>
                { state.cartList.map((item, index) => (<li key={index}>
                    <div className="imageHolder">
                        <img src={item.imageURL} alt=""  />
                    </div>
                    <div className="itemDetails">
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eum voluptatum inventore vel, beatae et, cumque deserunt illo iusto facere quidem alias dolore aliquam recusandae! Exercitationem necessitatibus ipsum temporibus quos.</div>
                        <p><strong>RS. {item.Price}</strong></p>
                        <div>{ item.rating }</div>
                        <button onClick={() => clickHandler(item.id)}>Remove</button>
                    </div>
                </li>
                ))  }               
            </ul>

    </div>
    );
}

export default Cart;