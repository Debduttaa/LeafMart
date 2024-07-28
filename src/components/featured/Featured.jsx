import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search1-removebg-preview.png" alt="" />
              <input type="text" placeholder="search..."/>
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular :</span>
            <button>Vallarai</button>
            <button>Tulsi</button>
            <button>Aloe Vera</button>
            <button>Green chiretta</button>
          </div> 
        </div>
        <div className="right">
          <img src="./img/farmer2-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;