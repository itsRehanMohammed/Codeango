import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./saved.css";
import { remove } from "../../Store/savedSlice";

const Saved = ({ toggleSaved }) => {
  const savedCourses = useSelector((state) => state.saved);
  const dispatch = useDispatch();
  const handleDelete = (course) => {
    dispatch(remove(course));
  };

  return (
    <div className="saved-section">
      <div className="saved-header">
        <div className="total-items">
          <h3>
            You have saved <span>{savedCourses.length} courses</span>
          </h3>
        </div>
        <div className="close-saved" onClick={toggleSaved}>
          <span>
            <CloseIcon />
          </span>
        </div>
      </div>
      {savedCourses.length > 0 ? (
        <div>
          <div className="saved">
            <div className="saved-items-wrapper">
              {savedCourses.map((item) => {
                return (
                  <div className="saved-item" key={item.key_word}>
                    <div className="saved-course-img">
                      <Link to={`/courses/${item.key_word}`} onClick={toggleSaved}>
                        {" "}
                        <img src={item.img} alt="" />{" "}
                      </Link>
                    </div>
                    <div className="saved-course-material">
                      <Link to={`/courses/${item.key_word}`} onClick={toggleSaved}>
                        <div className="saved-course-name">{item.course_name.slice(0, 40)}</div>{" "}
                      </Link>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                        <div className="saved-course-rating">
                          {" "}
                          <span>
                            <Rating name="size-small" defaultValue={item.rating} precision={0.1} size="small" readOnly />
                          </span>
                          <p>{item.rating}</p>
                        </div>
                        <div className="saved-remove">
                          <div className="saved-course-remove" onClick={() => handleDelete(item.key_word)}>
                            <span>
                              {" "}
                              <DeleteIcon />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="saved-empty-section">
          <div className="saved-empty">
            {" "}
            <div className="saved-empty-display">
              <h2> No Saved Courses ☹</h2>
            </div>
            <span className="redirect-to-course" onClick={toggleSaved}>
              <Link to="/courses"> Continue Exploring</Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Saved;
