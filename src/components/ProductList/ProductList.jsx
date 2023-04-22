import styles from './ProductList.module.css';
import Card from '../Card/Card';
import { useStateValue } from '../StateProvider'



const ProductList = () => {
    const { initialState } = useStateValue();

    return <div className={styles.ProductList}>
            {
                initialState.productList.map((item,index) => <Card key={index} {...item}/>)
            }
        </div>
}
export default ProductList;