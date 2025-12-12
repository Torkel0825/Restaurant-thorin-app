import "../styles/MaimeMenue.css";
import Dish from "./dish.jsx";

const MaimeMenue = ({meny}) => {
  return (
    <div id="meny-kort">
      <h1>Menu</h1>
      <ul id="dish">
        {meny.map((obj) => (
          <Dish {...obj} />
        ))}
      </ul>
    </div>
  );
};
export default MaimeMenue;
