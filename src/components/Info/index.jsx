import style from "./info.module.scss";

const Info = ({ slides, currentSlide }) => (
  <div className={style.info}>
    <h1 className={style.title}>{slides[currentSlide].title}</h1>
    <p className={style.description}>{slides[currentSlide].description}</p>
  </div>
);

export default Info;
