import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="grid_container">
      <div className="grid_item1">
        <h1>नेपाली वर्णमाला</h1>
      </div>
      <div className="grid_item2">
        <button type="button" className="btn">
          Click Me!
        </button>
      </div>
      <div className="grid_item3">
        <h1>Nepali Alphabets</h1>
      </div>
    </div>
  );
};

export default Home;
