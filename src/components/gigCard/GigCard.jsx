import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        
            
            <div className="info">
              <div className="user">
                <span>{item.username}</span>
              </div>
              <span>{item.desc}</span>
            </div>
            
          
          {/* <p>{item.desc}</p> */}
          <div className="star">
            {/* <img src="./img/star.png" alt="" /> */}
            {/* <span>{item.star}</span> 
             <span>{item.Origin}</span>
            <span>{item.Family}</span> */}
          </div>
        
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
            ₹ {item.price}
              <sup></sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
