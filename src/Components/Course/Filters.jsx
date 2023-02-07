import React from "react";
import { useSearchParams } from "react-router-dom";
import "./filter.css";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortHandler = (e) => {
    e.preventDefault();
    setSearchParams({ sort: e.target.name });
  };

  const resetFilters = (e) => {
    e.preventDefault();
    setSearchParams({});
  };
  return (
    <div className="filter">
      <div className="clear-all-filters">
        <input className="clear-all" type="button" value="Clear All Filters" onClick={resetFilters} />
      </div>
      <div className="sort">
        <h3> Sort </h3>
        <div className="sorting">
          <input onClick={sortHandler} className="sort-elements" type="button" name="high" value={"Sort: highest Rating"} id="asc" />
          <input onClick={sortHandler} className="sort-elements" type="button" name="low" value={"Sort: lowest Rating"} id="desc" />
          <input onClick={sortHandler} className="sort-elements" type="button" name="free" value={"Show Free Courses"} id="free" />
          <input onClick={sortHandler} className="sort-elements" type="button" name="paid" value={"Show Paid Courses"} id="paid" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
