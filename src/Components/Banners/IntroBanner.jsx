import React from "react";
import "./introbanner.css";

const IntroBanner = () => {
  const data = [
    {
      id: 1,
      img: "https://trailhead.salesforce.com/assets/home/learn-d16f92195753468ff0d2dcdf5ca2d76f8351097902f344f277694acb5ce320f9.svg",
      name: "Learn In-Demand Skills",
      desc: "Get hands-on and soft skills you need to succeed from anywhere for free.",
    },
    {
      id: 2,
      img: "https://trailhead.salesforce.com/assets/home/earn-1fec0a13b30fb81f50ee654fd8dd942f4a6dde0686a228938fe073c6061c33a2.svg",
      name: "Earn Resume-Worthy Credentials",
      desc: "Prove your skills and earn globally-recognized credentials that demonstrate your expertise to current and future employers.",
    },
    {
      id: 3,
      img: "https://trailhead.salesforce.com/assets/home/connect-47130389ad17b63cf6118be9052e169d5e825a790497406c713bf285321ceb58.svg",
      name: "Catch the Opportunities",
      desc: " Luck is what happens when preparation meets opportunity.",
    },
  ];
  return (
    <div className="introbanner">
      <h1 className="primary-color text-center"> Codeango Is the Fun Way to Learn</h1>
      <div className="intro-wrapper">
        {data.map((item) => {
          return (
            <div className="intro-card" key={item.id}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <p className="text-center">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntroBanner;
