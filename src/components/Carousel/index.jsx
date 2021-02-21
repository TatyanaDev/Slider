import React, { Component } from "react";
import classname from "classnames";
import Slide from "./Slide";
import styles from "./carousel.module.scss";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg?t=tn1200",
          title: "The Cosmic Reef: NGC 2014 and NGC 2020",
          descr:
            "Hubble reveals a colorful landscape of iridescent gases, streamers of dust, and brilliant, newborn stars in the giant red nebula NGC 2014. The blue ring of glowing oxygen at left is the neighboring nebula NGC 2020, formed by a torrential gaseous outflow from a lone, massive, super-hot star at its center.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn1200",
          title: "Lagoon Nebula",
          descr:
            "The Lagoon Nebula, a vast stellar nursery located 4,000 light-years away, provides an extraordinary tapestry of star birth.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-hh24.jpg?t=tn1200",
          title: "HH24 'light saber'",
          descr:
            "The newborn star in Herbig-Haro 24 (HH 24) is hidden from direct view, but jets blasting out along its rotation axis create a series of glowing shock fronts, revealing the new star’s presence.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn1200",
          title: "Eagle Nebula",
          descr:
            "Stars are being born deep inside the so-called Pillars of Creation, which are made of cold hydrogen gas laced with dust.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-saturn.jpg?t=tn1200",
          title: "Saturn",
          descr:
            "Hubble captured exquisite views of Saturn’s ring system and atmospheric details that once could only be provided by spacecraft visiting the distant world.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-milky-way-bulge.jpg?t=tn1200",
          title: "Milky Way Bulge",
          descr:
            "The Milky Way’s bulge is a crowded and dynamic region of variously aged stars zipping around at different speeds at the heart of our galaxy.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-bubble-nebula.jpg?t=tn1200",
          title: "Bubble Nebula",
          descr:
            "Hubble captured an enormous bubble being blown into space by a super-hot, massive star.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-whirlpool-galaxy.jpg?t=tn1200",
          title: "Whirlpool Galaxy",
          descr:
            "This image of the Whirlpool Galaxy illustrates a spiral galaxy’s grand design, from its curving spiral arms to its yellowish central core.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-jupiter.jpg?t=tn1200",
          title: "Jupiter",
          descr:
            "Among Jupiter’s most striking features is the Great Red Spot, a storm rolling counterclockwise between two bands of clouds moving in opposite directions.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/_images/abel-lensing.jpg?t=tn1200",
          title: "Abell 370",
          descr:
            "This immense galaxy cluster contains an astounding assortment of several hundred galaxies of various shapes tied together by the mutual pull of gravity. The enormous gravity of this massive cluster acts as a gravitational lens that magnifies and distorts the light of distant background galaxies.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-crab-nebula.jpg?t=tn1200",
          title: "Crab Nebula",
          descr:
            "The Crab Nebula is a six-light-year-wide expanding remnant of a star’s supernova explosion, which Japanese and Chinese astronomers recorded nearly 1,000 years ago.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/30thSouthernCrabWeb.jpg?t=tn1200",
          title: "Southern Crab Nebula (Spectra)",
          descr:
            "Hubble took spectral observations used to study the chemical makeup of the Southern Crab Nebula.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-westerlund2.jpg?t=tn1200",
          title: "Westerlund 2",
          descr:
            "Westerlund 2, a giant cluster of about 3,000 stars, resides in a raucous stellar breeding ground located 20,000 light-years away in the constellation Carina.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-orion-nebula.jpg?t=tn1200",
          title: "Orion Nebula",
          descr:
            "The Orion Nebula is a crowded, nearby stellar nursery with a dramatic dust-and-gas landscape carved by the powerful ultraviolet light of hot, young, massive stars.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-eta-carinae.jpg?t=tn1200",
          title: "Eta Carinae",
          descr:
            "The giant, petulant star Eta Carinae has been prone to violent outbursts, including one that ejected material to form the bipolar bubbles seen here. Hubble’s unique ability to see ultraviolet light allowed astronomers to uncover the glow of magnesium embedded in warm gas (shown in blue) in places they had not seen it before.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-sombrero.jpg?t=tn1200",
          title: "Sombrero Galaxy",
          descr:
            "Also known as M104, this galaxy has a dark dust lane, which we see almost edge on, along with a bright nucleus and an unusually large central bulge.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-veil-nebula.jpg?t=tn1200",
          title: "Veil Nebula",
          descr:
            "Hubble unveiled stunning details of the expanding remains of a massive star that exploded about 8,000 years ago.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-star-cluster-ngc-602.jpg?t=tn1200",
          title: "Star Cluster NGC 602",
          descr:
            "In the Small Magellanic Cloud, newly formed stars are blowing a cavity in the center of a star-forming region called NGC 602.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-mars-moon.jpg?t=tn1200",
          title: "Mars with Moon",
          descr:
            "Hubble captured the tiny moon Phobos during its orbital trek around Mars in this time-lapse photo. The telescope has observed the solar system for 30 years, providing long-term information on the planets’ weather and satellites.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-horsehead-nebula.jpg?t=tn1200",
          title: "Horsehead Nebula",
          descr:
            "The Horsehead Nebula in the constellation Orion is a small, dark, dusty region that is part of a dense dust cloud along the edge of the much larger, active stellar nursery.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-ngc-3603.jpg?t=tn1200",
          title: "NGC 3603",
          descr:
            "NGC 3603 is cluster of huge, hot stars located 20,000 light-years away in the constellation Carina.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-cats-eye.jpg?t=tn1200",
          title: "Cat's Eye Nebula",
          descr:
            "Hubble revealed the surprisingly intricate structures created by a dying star, including concentric gas shells, jets of high-speed gas, and unusual shock-induced knots of gas.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-ultra-deep-field.jpg?t=tn1200",
          title: "Hubble Ultra Deep Field 2014",
          descr:
            "This composite Hubble image features a deep and comprehensive view of nearly 10,000 galaxies taken in ultraviolet, visible, and near-infrared wavelengths. The Webb telescope, with even more sensitive infrared detectors, will see further back in time to the earliest galaxies.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-ngc-6302.jpg?t=tn1200",
          title: "Butterfly Nebula",
          descr:
            "A dying star is at the center of these ‘dainty’ butterfly wings, which are actually roiling cauldrons of gas heated to more than 36,000 degrees Fahrenheit.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-ngc-1300.jpg?t=tn1200",
          title: "NGC 1300",
          descr:
            "Hubble’s resolution revealed never-before-seen details of the barred spiral galaxy NGC 1300’s arms, disk, bulge, and nucleus.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-monkey-head.jpg?t=tn1200",
          title: "Monkey Head Nebula",
          descr:
            "This Hubble mosaic unveils a roiling region of star birth in a small portion of the Monkey Head Nebula.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-antennae-galaxies.jpg?t=tn1200",
          title: "Antennae Galaxies",
          descr:
            "This merging pair of galaxies is one of the nearest and youngest examples of colliding galaxies.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-v838-monocerotis.jpg?t=tn1200",
          title: "V838 Monocerotis",
          descr:
            "Hubble viewed an expanding halo of light, called a light echo, around the distant star V838 Monocerotis. The telescope’s longevity allowed observations over many years, showing how the light echo traveled through space and time.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-arp-273.jpg?t=tn1200",
          title: "Arp 273",
          descr:
            "The interacting galaxy pair called Arp 273 features the rose-shaped disk of the larger galaxy, which is distorted by the gravitational pull of the companion galaxy below it.",
        },
        {
          src:
            "https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-carina-nebula.jpg?t=tn1200",
          title: "Carina Nebula",
          descr:
            "This is a 50-light-year-wide view of the central region of the Carina Nebula, where a maelstrom of star birth and death is occurring. The mosaic is stitched together from 48 individual Hubble images. The future WFIRST mission could cover twice this area in one pointing, giving a more complete understanding of what is happening in and around the nebula.",
        },
      ],
      currentIndex: 0,
      disabled: false,
    };
  }

  nextIndex = () => {
    const { currentIndex, slides } = this.state;
    this.setState({ currentIndex: (currentIndex + 1) % slides.length });
  };

  prevIndex = () => {
    const { currentIndex, slides } = this.state;
    this.setState({
      currentIndex: (currentIndex - 1 + slides.length) % slides.length,
    });
  };

  slideShow = () => {
    const { currentIndex, disabled } = this.state;
    this.setState({
      currentIndex: (this.currentIndex = setInterval(this.prevIndex, 2000)),
      disabled: { disabled: !disabled },
    });
  };

  stopSlide = () => {
    const { currentIndex } = this.state;
    this.setState({
    });
  };

  render() {
    const { slides, currentIndex, disabled } = this.state;
    return (
      <div className={styles.wrapper}>
        <Slide slide={slides[currentIndex]} isCurrent={slides} />
        <div className={styles.setting}>
          <button
            onClick={this.prevIndex}
            className={classname(styles.btn, styles.prevBtn)}
          >
            {"<"}
          </button>
          <button
            onClick={this.nextIndex}
            className={classname(styles.btn, styles.nextBtn)}
          >
            {">"}
          </button>
          <button onClick={this.slideShow} disabled={disabled}>
            Start SlideShow
          </button>
          {/* <button onClick={this.stopSlide}>Stop SlideShow</button> */}
        </div>
      </div>
    );
  }
}

export default Carousel;
