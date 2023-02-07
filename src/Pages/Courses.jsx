import React, { useEffect } from "react";
import courses from "../courses.json";
import Card from "../Components/Card/Card";
import "./courses.css";
import Filters from "../Components/Course/Filters";
import { useSearchParams } from "react-router-dom";
const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("sort") === "high" && courses.sort((item1, item2) => item2.rating - item1.rating);
  searchParams.get("sort") === "low" && courses.sort((item1, item2) => item1.rating - item2.rating);

  useEffect(() => {
    setSearchParams({});
  }, []);
  return (
    <>
      <div className="courses">
        <h1> Our Courses</h1>
        <div className="courses-page-wrapper">
          <Filters />
          <div className="courses-wrapper">
            {courses.map((item) => {
              if (searchParams.get("sort") === "free") {
                return item.price === "free" && <Card item={item} key={item.key_word} />;
              }
              if (searchParams.get("sort") === "paid") {
                return item.price === "paid" && <Card item={item} key={item.key_word} />;
              }
              return <Card item={item} key={item.key_word} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
