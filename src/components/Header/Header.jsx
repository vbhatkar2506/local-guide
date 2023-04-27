import styles from './Header.module.css'
//import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import Card from '../Card/Card';
import React, { useState } from 'react';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';


const Header = () => {
  const { initialState } = useStateValue();
  const { myReducer } = useStateValue();
  const [search, setSearch] = useState('');
  const [state] = myReducer;
  console.log(search);
 
return (
  <div>
<div className={styles.header}>
    <div className={styles.logo}>
        <div>
        <Link to='/'>
            <h1 onClick={(e) => setSearch('')}>
            {/* <LocationOnOutlinedIcon /> */}
              Local<span>Guide</span>
            </h1>
        </Link>

          
        </div>
    </div>
    <div className={styles.searchWidth}>
    <div className={styles.searchItem}>
    <svg
                width="20"
                height="20"
                className="DFW_E nT46U VETef"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
              </svg>
              <form action="">
                <input
                  type="text"
                 onChange={(e) => setSearch(e.target.value)}
                  placeholder="Try Searching by Place Name, Address or By Category"
                />
              </form>
              {/* <-------------------camera icon in navbar---------------------------> */}
              <svg
                width="20"
                height="20"
                className="VdNCI nT46U VETef"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path>
              </svg>
    </div>
    </div>
    <div className={styles.icons}>
      <Link to='/Cart'>
      <FavoriteBorderOutlinedIcon id={styles.size}/>{state.cartList.length} &nbsp;
      </Link>
    </div>
</div>

<div className={styles.filters}>
            
            <div className={styles.filterIcon}>
                <RestaurantMenuIcon id={styles.size1} onClick={(e) => setSearch('restaurant')}/>
            </div>
            <div className={styles.filterIcon} >
            <LocalGasStationIcon id={styles.size2} onClick={(e) => setSearch('petrolpump')}/>
            </div>
            <div className={styles.filterIcon} ><LocalHotelIcon id={styles.size3} onClick={(e) => setSearch('hotel')}/></div>
            <div className={styles.filterIcon} ><StorefrontIcon id={styles.size4} onClick={(e) => setSearch('shopping')}/></div>
            <div className={styles.filterIcon} ><ParkOutlinedIcon id={styles.size5} onClick={(e) => setSearch('garden')}/></div>
            <div className={styles.filterIcon} ><LocalHospitalOutlinedIcon id={styles.size6} onClick={(e) => setSearch('hospital')}/></div>
        </div>
        {/* <div className={styles.sort}>
          <button id={styles.sortbtn} onClick={setSort(!sort)} >Sort by Rating</button>
        </div> */}
    <div className={styles.ProductList}>
          {
              initialState.productList.filter((item) => {
                return search.toLowerCase() === ''
                ? item
                :item.title.toLowerCase().includes(search) || item.address.toLowerCase().includes(search) || item.category.toLowerCase().includes(search); 
              }).map((item,index) => <Card key={index} {...item}/>)
          }
      </div>
      </div>
);
}
export default Header;