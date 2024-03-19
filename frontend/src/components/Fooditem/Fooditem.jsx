import React, { useState } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
const Fooditem = ({ id, name, price, decription, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{decription}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
