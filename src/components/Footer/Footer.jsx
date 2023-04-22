import styles from "./Footer.module.css";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { RiTelegramLine } from "react-icons/ri";
import { AiOutlineCopyright , AiOutlineYoutube } from "react-icons/ai";

//AiOutlineHeart
function Footer() {
    return (
        <div className={styles.footer}>
            <div></div>            
            <div className={styles.container}>
            <div className={styles.policies}>
                <p>Support</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className={styles.socialIcons}>
            <div className={styles.socialMedia}>
            <FiTwitter size={35} />
                </div>
            <div className={styles.socialMedia}>
            <RiTelegramLine size={40} />
                </div>
            <div className={styles.socialMedia}>
            <BsWhatsapp size={35} />
                </div>
            <div className={styles.socialMedia}>
            <AiOutlineYoutube size={35} />
                </div>
            <div className={styles.socialMedia}>
            <FaInstagram size={35} />
                </div>
            <div className={styles.socialMedia}>
            <FiFacebook size={35} />
                </div>
            </div>
            </div>
            <p>Copyright <AiOutlineCopyright /> 2023 Avengers Assemble Pvt. Ltd All Rights Riserved</p>
        </div>
    );
}
export default Footer;