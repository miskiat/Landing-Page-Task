import React from "react";
import { houses } from "../data";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <h1 className="house">Houses</h1>
      <p className="purpose">
        Houses Of is a project showcasing charismatic houses around the world.
      </p>
      <button className="explore">
        <img className="globe" src="/vectors/globe-icon.svg" />
        Explore Locations
      </button>
      <div>
        <div className="houses">
          {houses.map((house) => (
            <img src={`/images/${house}`} alt="" />
          ))}
        </div>
        <div>
          {" "}
          <p className="discovery">
            Discover 274 homes from 10 places in 4 countries
          </p>
          <div className="button-category">
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
    </div>
  );
};

export default Home;
