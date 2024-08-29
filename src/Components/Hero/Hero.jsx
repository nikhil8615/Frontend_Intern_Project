import React from "react";
import "./Hero.css";
import img from "../../assets/heroimg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_top">
        <img src={img} alt="" />
      </div>
      <div className="hero_bot">
        <h1>Simplify Your Therapy Center Operations</h1>
        <p>
          Designed specifically for therapy centers, Symplify reduces manual
          work by centralizing all your administrative tasks in one easy-to-use
          platform. Simplify your operations, improve efficiency, and enhance
          patient care with Symplify.
        </p>
      </div>
      <div className="hero_button">
        <Link
          to={"productf"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <button>Explore Feature</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
