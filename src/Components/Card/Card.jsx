import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import Rating from "@mui/material/Rating";
import { add } from "../../Store/savedSlice";
import { useDispatch } from "react-redux";

const Card = ({ item }) => {
  const [isAdding, setIsAdding] = useState(false);

  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(add(item));
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  return (
    <>
      <div className="card">
        <div className={item.price === "free" ? "tag-free" : "tag-paid"}>{item.price}</div>
        <Link className="link" to={`/courses/${item.key_word}`}>
          <div className="course-img">
            <img className="img" src={item.img} alt=""></img>
          </div>

          <div className="course-name">
            <p>{item.course_name.slice(0, 35)}...</p>
          </div>
        </Link>
        <div className="bottom">
          <div className="views_rating_wrapper">
            <div className="views">
              <span>
                <VisibilityIcon />
              </span>
              <p>{item.views}k</p>
            </div>
            <div className="rating">
              <span>
                <Rating name="size-small" defaultValue={item.rating} precision={0.1} size="small" readOnly />
              </span>
              <p>{item.rating}</p>
            </div>
          </div>
          <button disabled={isAdding} className={`${isAdding ? "added-to-saved" : "add-to-saved"} `} onClick={() => handleAdd(item)}>
            {isAdding ? <CheckCircleSharpIcon /> : <BookmarkBorderIcon />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
