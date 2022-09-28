// import Header from "../components/Header/header";
// import Banner from "../components/Banner/Banner";


// const styles = {
//   wrapper: "mx-auto",
// };

// export default function Home() {
//   return (
//     <div className={styles.wrapper}>
//       <Header />
      
      
//     </div>
//   );
// };
const styles={
  wrapper:""
};
import Banner from "../components/Banner/banner";
import Header from "../components/Header/header"
import ImageGroup from "../components/ImageGroup/imageGroup";
export default function Home(){
return(
  <div className={styles.wrapper}>
    <Header />
    <Banner/>
    <ImageGroup/>
  </div>
)
;
};