import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FoodDetails.css";

const FoodDetails = () => {
  const { foodId } = useParams();
  const [food, setFood] = useState([]);
  const {
    strMeal,
    strIngredient10,
    strIngredient11,
    strMealThumb,
    strInstructions,
    idMeal,
  } = food[0] || food;
  console.log(food[0]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
      .then((res) => res.json())
      .then((data) => setFood(data?.meals));
  }, [foodId]);
  console.log(food);
  return (
    <div>
      <h1>This is foodDetails for: {foodId}</h1>
      <div className="foodDetails-card">
        <img src={strMealThumb} alt="" />
      </div>
    </div>
  );
};

export default FoodDetails;
