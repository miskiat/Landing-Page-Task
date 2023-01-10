import React from "react";
import { country, houses } from "../data";
import "./Home.css";
import Country from "./Country";

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

      <div className="houses">
        {houses.map((house, houseIndex) => (
          <img
            className={` house-img house-img${houseIndex}`}
            src={`/images/${house}`}
            alt=""
          />
        ))}
      </div>

      <div className="second-section">
        <div>
          {" "}
          <p className="discovery">
            Discover 274 homes from 10 places in 4 countries
          </p>
        </div>
        <div className="events">
          <div className="event-browse">
            <img src="/vectors/house-icon.svg" />
            BROWSE ALL PHOTOS
          </div>
          <div className="event-product">
            <img src="/vectors/shoppingbag-icon.svg" />
            SHOP OUR PRODUCTS
          </div>
          <div className="event-project">
            <img src="/vectors/compass.svg" />
            LEARN ABOUT THE PROJECT
          </div>
        </div>

        <div className="world">World</div>
        <p className="browse">Browse all the cities and countries</p>
        <div className="country-button">
          <button className="europe">Europe</button>
          <button className="oceania">Oceania</button>
        </div>
        <div className="countries">
          {country.map((country, index) => (
            <div className="country">
              <img className="flag" src={country.icon} />
              <p className="country-name">{country.capital}</p>
              <p className="capital">{country.country}</p>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default Home;
