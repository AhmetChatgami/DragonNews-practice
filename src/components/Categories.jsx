import React, { use } from "react";
import { NavLink } from "react-router";

const categoryNews = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  console.log(categoryNews);

  const categories = use(categoryNews);
  return (
    <div>
      <h1 className="font-semibold">All Category ({categories.length})</h1>
      <div className="grid grid-cols-1 space-y-2.5 mt-5">
        {categories.map((category) => (
          <NavLink key={category.id} className={"bg-base-100 hover:bg-base-200 p-2 rounded"} to={`/category/${category.id}`}>{category.name} </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
