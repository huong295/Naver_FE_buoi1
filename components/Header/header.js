

import Image from "next/image";
import Logo from "../../statis/img/logo.jpg"
import { GiHamburgerMenu } from "react-icons/gi";

const styles = {
  wrapper: "flex justify-between p-5 ",
  
  logoContainer: "",
  logo: "cursor-pointer object-contain",
  bannerNav:
    "hidden cursor-pointer flex space-x-5 font-semibold sm:flex",
  button: `py-2 px-4 `,
  activeButton: `text-[#FA4A0C] py-2 px-4`,
  hamburgerMenu: "sm:hidden px-4",
};

const Header = () => {
  return (
    <div className={styles.wrapper}>
     
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            height={40}
            width={200}
            alt={""}
          />
        </div>
        <div className={styles.bannerNav}>
          <div className={styles.activeButton}>Home</div>
          <div className={styles.button}>Product</div>
          <div className={styles.button}>Faq</div>
          <div className={styles.button}>Contact</div>
        </div>
        <div className={styles.hamburgerMenu}>
          <GiHamburgerMenu />
        </div>
      </div>
    
  );
};

export default Header;

