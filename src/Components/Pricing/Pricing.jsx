import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <h2>Our Pricing Plans</h2>
        <div className="pricing-table">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Basic Plan</h3>
              <p className="price">
                $29 <span>/ month</span>
              </p>
            </div>
            <ul>
              <li>10 Therapy Sessions</li>
              <li>Basic Reporting</li>
              <li>Email Support</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="pricing-card featured ">
            <div className="pricing-card-header pro">
              <h3>Pro Plan</h3>
              <p className="price pro">
                $59 <span className="pro_span">/ month</span>
              </p>
            </div>
            <ul className="pro_ul">
              <li>50 Therapy Sessions</li>
              <li>Advanced Reporting</li>
              <li>Priority Support</li>
              <li>Custom Integrations</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Enterprise Plan</h3>
              <p className="price">
                $99 <span>/ month</span>
              </p>
            </div>
            <ul>
              <li>Unlimited Therapy Sessions</li>
              <li>Comprehensive Reporting</li>
              <li>24/7 Support</li>
              <li>Dedicated Account Manager</li>
            </ul>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
