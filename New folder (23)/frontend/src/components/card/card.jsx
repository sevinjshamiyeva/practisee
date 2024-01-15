import React from "react";
import "./card.css";
function Card() {
  return (
    <div className="card">
      <div className="cardTittle"></div>
      <div className="cardDetail">
        <div className="detail">
          <h3>Wild West Hoodie</h3>
          <span>5</span> <span>29</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <button>Cart</button>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
