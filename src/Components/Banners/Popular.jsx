import React from "react";
import { Link } from "react-router-dom";
import "./popular.css";
import Courses from "../../courses.json";
import Card from "../Card/Card";
const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-head">
        <h2>Popular Courses</h2>
        <div className="see-all-courses">
          <Link to={"courses"}>See All</Link>
        </div>
      </div>
      <div className="popular-courses_wrapper">
        {Courses.map((item) => {
          return item.rating > 4.2 && <Card key={item.key_word} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
