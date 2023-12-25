import { useState } from "react";
import Common from "../../components/Common";
import slides from "../../constants/slides";
import Slide from "../../components/Slide";
import style from "./slider.module.scss";

const Slider = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isSlideShow, setIsSlideShow] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [delay, setDelay] = useState(1000);

  const prevSlide = () =>
    setCurrentSlide(
      (currentSlide) => (currentSlide - 1 + slides.length) % slides.length
    );

  const nextSlide = () =>
    setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);

  const startSlideShow = () => {
    setIsSlideShow(true);

    const intervalId = setInterval(nextSlide, delay);
    setIntervalId(intervalId);
  };

  const stopSlideShow = () => {
    setIsSlideShow(false);

    clearInterval(intervalId);
  };

  const changeView = () => setIsFullScreen((isFullScreen) => !isFullScreen);

  return (
    <div>
      <div className={style.sliderWrapper}>
        <div>
          <Slide
            isFullScreen={isFullScreen}
            slides={slides}
            currentSlide={currentSlide}
            isSlideShow={isSlideShow}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />

          {!isFullScreen && (
            <Common
              slides={slides}
              currentSlide={currentSlide}
              isSlideShow={isSlideShow}
              stopSlideShow={stopSlideShow}
              startSlideShow={startSlideShow}
              delay={delay}
              setDelay={setDelay}
              changeView={changeView}
              isFullScreen={isFullScreen}
            />
          )}
        </div>
      </div>

      {isFullScreen && (
        <Common
          slides={slides}
          currentSlide={currentSlide}
          isSlideShow={isSlideShow}
          stopSlideShow={stopSlideShow}
          startSlideShow={startSlideShow}
          delay={delay}
          setDelay={setDelay}
          changeView={changeView}
          isFullScreen={isFullScreen}
        />
      )}
    </div>
  );
};

export default Slider;
