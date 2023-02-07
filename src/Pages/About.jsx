import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="primary-color">About Us</h1>
      <div className="about-wrapper">
        <div className="dedicated-trainers">
          <div className="img">
            <img src="https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=sph" alt="" />
          </div>
          <div className="content">
            <h1>Dedicated Trainers</h1>
            <p>Our classes are taught by dedicated and experienced trainers. Using proven teaching strategies, they make sure that every student finds a path to success.</p>
          </div>
        </div>
        <div className="offers">
          <div className="img">
            <img src="https://img.freepik.com/free-vector/online-education-language-courses-apps-group-training-personal-tutors-offers-ads-flat-smartphones-screens-set_1284-33095.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=sph" alt="" />
          </div>
          <div className="content">
            <h1>First-Rate Course Offerings</h1>
            <p>We embrace a learning environment that will prepare you for the path ahead. Our classes incorporate traditional learning styles as well as hands-on experiences.</p>
          </div>
        </div>
        <div className="mission">
          <div className="img">
            <img src="https://img.freepik.com/free-vector/business-mission-concept-illustration_114360-7295.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=sph" alt="" />
          </div>
          <div className="content">
            <h1>Our Mission</h1>
            <p>Your success is our priority. To support our inclusive community, we provide a personal approach, tailoring learning methods to each student's needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
