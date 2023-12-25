import React, { Component } from "react";
import classname from "classnames";
import styles from "./slide.module.scss";

class Slide extends Component {
  render() {
    const {
      slide: { src, title, descr },
      isCurrent,
    } = this.props;

    const classes = classname(styles.slide, {
      [styles.currentSlide]: isCurrent,
    });

    return (
      <div className={classname(classes, styles.wrapper)}>
        <img src={src} alt={title} className={styles.img} />
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.info}>{descr}</p>
      </div>
    );
  }
}

export default Slide;
