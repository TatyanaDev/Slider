const FullScreenBtn = ({ changeView, isFullScreen }) => (
  <button onClick={changeView}>
    {isFullScreen ? "Remove full screen" : "Set full screen"}
  </button>
);

export default FullScreenBtn;
