import React, { Component } from "react";
import classname from "classnames";
import styles from "./staticCarousel.module.scss";
import Carousel from "../../Carousel";

class StaticSlide extends Component {
  render() {
    return (
      <div>
        <div className={styles.slidelWrapper}>
          <img
            className={styles.img}
            src={
              "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg?t=tn1200"
            }
            alt='The Cosmic Reef: NGC 2014 and NGC 2020'
          />
          <h1 className={styles.heading}>
            The Cosmic Reef: NGC 2014 and NGC 2020
          </h1>
          <p className={styles.info}>
            Hubble reveals a colorful landscape of iridescent gases, streamers
            of dust, and brilliant, newborn stars in the giant red nebula NGC
            2014. The blue ring of glowing oxygen at left is the neighboring
            nebula NGC 2020, formed by a torrential gaseous outflow from a lone,
            massive, super-hot star at its center.
          </p>
          <div className={styles.setting}>
            <button className={classname(styles.btn, styles.prevBtn)}>
              {"<"}
            </button>
            <button className={classname(styles.btn, styles.nextBtn)}>
              {">"}
            </button>
            <button>Start SlideShow</button>
            <button>Stop SlideShow</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StaticSlide;
