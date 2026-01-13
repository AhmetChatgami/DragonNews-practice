import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(data)
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      console.log(filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);
  return (
    <div>
      <title>Dragon News</title>
      <h2 className="mb-5 font-semibold text-2xl">
        Total{" "}
        <span className="text-secondary">
          {categoryNews.length}
        </span>{" "}
        News Found
      </h2>

      <div>
        {
          categoryNews.map((news)=>(<NewsCard key={news.id} news={news}></NewsCard>))
        }
      </div>
    </div>
  );
};

export default CategoryNews;
