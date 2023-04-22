import styles from './Filter.module.css'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';

function Filter () {

    return (
        <div className={styles.filters}>
            <div>
                <RestaurantMenuIcon id={styles.size1}/>
            </div>
            <div>
            <LocalGasStationIcon id={styles.size2}/>
            </div>
            <div><LocalHotelIcon id={styles.size3}/></div>
            <div><StorefrontIcon id={styles.size4}/></div>
            <div><ParkOutlinedIcon id={styles.size5}/></div>
            <div><LocalHospitalOutlinedIcon id={styles.size6}/></div>
        </div>
    );
}
export default Filter;

