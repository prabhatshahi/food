import React, { useContext } from "react";
import "./Fooddisplay.css";
import { food_list } from "./../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import Fooditem from "../Fooditem/Fooditem";
const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <Fooditem
              key={index}
              id={item._id}
              name={item.name}
              decription={item.decription}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;
