import style from "./slideshow-btn.module.scss";

const SlideshowBtn = ({ isSlideShow, stopSlideShow, startSlideShow }) => (
  <button
    onClick={isSlideShow ? stopSlideShow : startSlideShow}
    className={style.marginRight}
  >
    {isSlideShow ? "Stop slideshow" : "Start slideshow"}
  </button>
);

export default SlideshowBtn;
