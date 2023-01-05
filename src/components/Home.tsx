import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="house">Houses</div>
      <p>
        Houses Of is a project showcasing charismatic houses around the world.
      </p>
      <button>Explore Locations</button>
      <div>
        <p>Discover 274 homes from 10 places in 4 countries</p>
        <div>
          <button>BROWSE ALL PHOTOS</button>
          <button>SHOP OUR PRODUCTS</button>
          <button>LEARN ABOUT THE PROJECT</button>
        </div>
        <div>World</div>
        <p>Browse all the cities and countries</p>
        <button>Europe</button>
        <button>Oceania</button>
      </div>
    </div>
  );
};

export default Home;
