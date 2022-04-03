import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const navagite = useNavigate();
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Click Name an see flag !</h2>
      {countries.map((country) => (
        <button
          onClick={() => navagite("/countries/" + country.name.common)}
          style={{ margin: "2px" }}
        >
          {country.name.common}
        </button>
      ))}
      <Outlet />
    </div>
  );
};

export default Countries;
