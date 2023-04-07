import img from '../images/zoomlogo.png'
function Loader() {
  return (
    <div className = "spin">
      <div
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      ><img         className="loading"
      src={img} alt='loader'></img></div>
    </div>
  );
}

export default Loader;
