import React from "react";
import { Link, useParams } from "react-router-dom";
import Courses from "../../courses.json";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Course.css";
const Course = () => {
  const { keyword } = useParams();
  return (
    <div className="course">
      <div className="course-img">
        <img src="https://img.freepik.com/free-vector/team-mobile-web-app-development_107791-12795.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=sph" alt="" />
      </div>
      {Courses.map((item) => {
        return (
          keyword === item.key_word && (
            <div key={item.key_word} className="course-overlay">
              <div className="course-left">
                <h1 className="primary-color"> {item.course_name} </h1>
                <div className="course-QandA">
                  <div className="course-Q">
                    <h2>{item.desc_head}</h2>
                  </div>
                  <div className="course-A">
                    <p>{item.desc}</p>
                  </div>
                </div>
                <div className="course-QandA">
                  <div className="course-Q">
                    <h2>{item.desc_head2}</h2>
                  </div>
                  <div className="course-A">
                    <p>{item.desc2}</p>
                  </div>
                </div>
                <div className="course-QandA">
                  <div className="course-Q">
                    <h2>{item.desc_head3}</h2>
                  </div>
                  <div className="course-A">
                    <p>{item.desc3}</p>
                  </div>
                  <div className="course-A">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla possimus debitis, eius distinctio suscipit quae quis vitae. Quo error et laudantium a veniam repellat alias nisi dolor, molestias rerum quas magnam ab fuga laborum fugit. Commodi,
                      dolore id doloremque quibusdam magni cupiditate sunt explicabo inventore, at quis maiores assumenda blanditiis doloribus provident delectus expedita architecto nihil!
                    </p>
                  </div>
                  <div className="course-A">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio reprehenderit, in doloribus alias similique beatae, nesciunt amet pariatur explicabo molestias facere quam corporis harum quod nulla unde repellendus minima culpa dicta animi! Iste,
                      temporibus sunt. Vitae nobis quam autem. Sint, nostrum corrupti nihil ratione atque, illum assumenda sed debitis non quam quas dolor rem ex distinctio molestiae odit quibusdam sit inventore reprehenderit magnam at quo, architecto aliquam pariatur? Dicta
                      suscipit dolore inventore omnis praesentium earum amet voluptatibus, maxime id rerum enim ullam ducimus nobis architecto sit eius repudiandae. Nostrum, quam laboriosam.
                    </p>
                  </div>
                  <div className="course-footer">
                    <p className="get-full-access">
                      Lorem ipsum dolor sit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae natus voluptates soluta exercitationem quis dolorum illo odit ipsam sunt, voluptatum asperiores amet consectetur adipisicing elit. Delectus eius saepe beatae iusto
                      voluptatibus sint, quae animi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error fuga ullam ab aliquam quaerat perferendis.
                    </p>
                    <span className="lock-course">
                      {" "}
                      <LockOutlinedIcon />
                    </span>
                    <Link to={"/login"}>
                      <input type="button" value="Get Full Access" className="course-btn" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="course-right">
                <h4>{item.time}</h4>
                <h4>Rating - {item.rating} ⭐ </h4>
                <h4>Total Views - {item.views}k</h4>
                <Link to={"/login"}>
                  <input type="button" value="Get Full Access" className="course-btn mt-20" />
                </Link>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Course;
