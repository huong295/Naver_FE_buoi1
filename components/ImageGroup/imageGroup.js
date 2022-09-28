import Image from "next/image";
import Phone1 from "../../statis/img/Phone1.jpg";
import Phone2 from "../../statis/img/Phone2.jpg"
import Background from "../../statis/img/Rectangle 48.jpg";
const styles = {
  wrapper: "mx-auto",
  Background: "",
  phoneContainer:
    "flex items-center justify-center flex-start ml-[-6rem] mt-4 sm:mt-0 overflow-x-clip",
  phone1Container: "object-cover mt-[-18rem] mr-[-3rem] sm:w-299 sm:h-586",
  phone2Container: "object-cover mt-[-12rem] ml-[-12rem] sm:w-299 sm:h-586",
};

export default function PhotoGroup() {
  return (
    <div className={styles.wrapper}>
      <div>
        <Image className={styles.Background} src={Background} />
      </div>
      <div className={styles.phoneContainer}>
        <div className={styles.phone1Container}>
          <Image className={styles.phone1} src={Phone1} alt={""} />
        </div>
       <div className ={styles.phone2Container}>
      <Image className={styles.Phone2} src = {Phone2}/>
       </div>
      </div>
    </div>
  );
}
