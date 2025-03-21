import style from "./styles.module.scss";

const Select = ({ delay, setDelay }) => (
  <label className={style.marginRight}>
    Delay of the slideshow:&nbsp;
    <select value={delay} onChange={({ target: { value } }) => setDelay(parseInt(value))}>
      <option value="1000">1 sec.</option>
      <option value="2000">2 sec.</option>
      <option value="3000">3 sec.</option>
      <option value="4000">4 sec.</option>
      <option value="5000">5 sec.</option>
    </select>
  </label>
);

export default Select;
