const styles = {
  wrapper: "flex",
  content: "mt-4 flex items-center w-5/6 max-w-7xl flex-col",
  title: "text-2xl font-Montserrat font-bold text-black leading-9 left-1/2",
  subTitle: "text-6xl font-Poppins font-bold text-black",
  subContent: "text-2xl font-Montserrat font-medium text-black",
  buttonContainer:
    "flex pt-8 pb-8 mb-[8rem] justify-between gap-y-4 sm:gap-y-0 sm:w-[28rem] sm:flex-row",
  buttonPlay:
    "py-2 px-8 rounded-full bg-[#FA4A0C] text-xl font-semibold text-center border-2 border-[#FA4A0C] text-white sm:w-[12rem] sm:py-4",
  buttonApp:
    "py-2 px-8 rounded-full text-xl bg-[#fff] font-semibold border-solid border-2 border-[#fa4a0c] text-center text-[#FA4A0C]u sm:text-white sm:w-[12rem] sm:py-4 sm:border-white",
};
const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>Food app</h3>
        <h1 className={styles.subTitle}>
          Why stay hungry when you can order form Bella Onojie
        </h1>
        <h3 className={styles.subContent}>
          Download the bella onoje’s food app now on
        </h3>

        <div className={styles.buttonContainer}>
          <div className={styles.buttonPlay}>PLay Store</div>
          <div className={styles.buttonApp}>App Store</div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
