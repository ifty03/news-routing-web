import React from "react";
import useNews from "../hooks/hooks";
import RecipeReviewCard from "./Article/Article";
import "./News.css";

const News = () => {
  const [food, setFood] = useNews({});
  const { meals } = food;
  console.log(meals);
  return (
    <div>
      <h1>this is news</h1>
      <div className="news-container">
        {meals?.map((meal) => (
          <RecipeReviewCard meal={meal}></RecipeReviewCard>
        ))}
      </div>
    </div>
  );
};

export default News;
