import FullScreenBtn from "../FullScreenBtn";
import SlideshowBtn from "../SlideshowBtn";
import Select from "../Select";
import Info from "../Info";

const Common = ({
  slides,
  currentSlide,
  isSlideShow,
  stopSlideShow,
  startSlideShow,
  delay,
  setDelay,
  changeView,
  isFullScreen,
}) => (
  <>
    <Info slides={slides} currentSlide={currentSlide} />

    <div>
      <SlideshowBtn
        isSlideShow={isSlideShow}
        stopSlideShow={stopSlideShow}
        startSlideShow={startSlideShow}
      />

      <Select delay={delay} setDelay={setDelay} />

      <FullScreenBtn changeView={changeView} isFullScreen={isFullScreen} />
    </div>
  </>
);

export default Common;
