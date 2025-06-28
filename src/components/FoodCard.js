import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function FoodCard({ food }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card m-2 d-flex flex-column" style={{ width: "18rem", height: "100%" }}>
      <img
        src={food.image}
        className="card-img-top"
        alt={food.name}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text">{food.description}</p>
        <h6 className="mb-3">₹ {food.price}</h6>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => addToCart(food)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
