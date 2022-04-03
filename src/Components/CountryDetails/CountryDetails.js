import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, [countryName]);
  const [singleCountry] = country;
  return (
    <div>
      <h1>{countryName} flag</h1>
      <img src={singleCountry?.flags?.png} alt="" />
    </div>
  );
};

export default CountryDetails;
