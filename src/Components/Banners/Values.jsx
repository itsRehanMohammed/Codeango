import React from "react";
import "./values.css";
const Values = () => {
  const values = [
    {
      id: 1,
      img: "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=sph",
      name: "Customer Support",
      desc: "We believe in 100% customer satisfaction and offer 24/7 premium support to all our customers",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-vector/teamwork-people-with-puzzle-pieces_24877-54950.jpg?size=338&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=sph",
      name: "Team Work",
      desc: "Our team members are all about helping others and maintaining friendly environment",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-vector/successful-business-man-with-trophy_1150-35038.jpg?size=338&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=sph",
      name: "Passion",
      desc: "Passion drives us to perform better, progress continually, and deliver timely",
    },
  ];
  return (
    <div className="values">
      <div className="valuesbanner">
        <h1 className="text-center">Our Values</h1>
        <div className="values-wrapper">
          {values.map((item) => {
            return (
              <div className="values-card" key={item.id}>
                <img src={item.img} alt="" />
                <h2>{item.name}</h2>
                <p className="text-center">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Values;
