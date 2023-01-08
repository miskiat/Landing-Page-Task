import React from "react";

const Country = (country: any) => {
  return (
    <div>
      <img src={country.icon} alt="" />
      <p>{country.capital}</p>
      <p>{country.country}</p>
    </div>
  );
};

export default Country;
//  <div className="capital">{capital}</div>
//     <div className="country">{country}</div>;

//     icon,
//   capital,
//   country,
// }: {
//   icon: string;
//   capital: string;
//   country: string;
