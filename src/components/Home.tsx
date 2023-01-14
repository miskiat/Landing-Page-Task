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
        <div className="width-full">
          <div className="discovery">
            <h1 className="discover">Discover </h1>
            <h1>274 homes</h1>
            <h1 className="from">from </h1>
            <h1>10 places </h1>
            <h1 className="in">in</h1>
            <h1>4 countries</h1>
          </div>
        </div>

        <div className="events">
          <div className="event-browse">
            <img className="remix-image" src="/vectors/house-icon.svg" />
            BROWSE ALL PHOTOS
          </div>
          <div className="event-product">
            <img className="remix-image" src="/vectors/shoppingbag-icon.svg" />
            SHOP OUR PRODUCTS
          </div>
          <div className="event-project">
            <img className="remix-image" src="/vectors/compass.svg" />
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
        <div className="third-section">
          <div className="white-background">
            <img src="/public/images/rooom.webp" />
            <div>
              <h1>Browse our products</h1>
              <p>
                Discover our graphic posters and prints of your favorite
                locations.
              </p>
              <button>Shop</button>
              <p>
                Posters available for Brisbane, Melbourne, Montpellier and
                Occitanie.
              </p>
            </div>
          </div>
          <div>
            <h1>Keep Updated</h1>
            <p>
              Get notified of new locations and photos as well as new available
              Houses Of products.
            </p>
            <button>Your email address</button>
            <img src="/public/vectors/file.svg" />
            <p>See past issues</p>
            <p>No spam, we promise!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
