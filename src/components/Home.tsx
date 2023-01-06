import React from "react";
import { houses } from "../data";
import "./Home.css";
import Event from "../components/Event";
export const events = [
  {
    icon: "/vectors/house-icon.svg",
    desc: "BROWSE ALL PHOTOS",
  },
  { icon: "/vectors/shoppingbag-icon.svg", desc: "SHOP OUR PRODUCTS" },
  { icon: "/public/vectors/compass.svg", desc: "LEARN ABOUT THE PROJECT" },
];
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
          <div>
            {events.map(({ icon, desc }, i) => (
              <Event key={i} icon={icon} desc={desc} />
            ))}
            {/* {events.map((event, index) => (
              <events icon={event.icon} desc={event.desc} />
            ))} */}
          </div>
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
