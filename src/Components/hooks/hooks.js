import { useEffect, useState } from "react";

const useNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return [news, setNews];
};
export default useNews;
