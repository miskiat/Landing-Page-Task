import React from "react";

const Event = ({ icon, desc }) => {
  return (
    <div className="events">
      <img src={icon} alt="" />
      <div className="events">{desc}</div>
    </div>
  );
};

export default Event;
