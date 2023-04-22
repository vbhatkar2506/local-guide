import styles from './Header.module.css'
//import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Header() {
return (
<div className={styles.header}>
    <div className={styles.logo}>
        <div>
          <h1>
        {/* <LocationOnOutlinedIcon /> */}
        Local<span>Guide</span>
          </h1>
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
                //   onChange={inpHandler}
                  placeholder="Try Saree, Kurti or Search by Product Code"
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
      <FavoriteBorderOutlinedIcon id={styles.size}/>
    </div>
</div>
);
}
export default Header;