import style from "./slide.module.scss";

const Slide = ({
  isFullScreen,
  slides,
  currentSlide,
  isSlideShow,
  prevSlide,
  nextSlide,
}) => (
  <div
    style={{
      position: "relative",
      width: isFullScreen ? "100vw" : "1120px",
      height: isFullScreen ? "100vh" : "560px",
    }}
  >
    <img
      src={slides[currentSlide].src}
      alt={slides[currentSlide].title}
      className={style.image}
    />

    {!isSlideShow && (
      <div className={style.btnsContainer}>
        <button onClick={prevSlide}>&#8249;</button>
        <button onClick={nextSlide}>&#8250;</button>
      </div>
    )}
  </div>
);

export default Slide;
