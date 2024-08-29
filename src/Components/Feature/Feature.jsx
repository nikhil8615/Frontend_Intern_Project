import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <>
      <div className="container">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Scheduling</h3>
            <p>Easily manage and schedule therapy sessions.</p>
          </div>
          <div className="feature-card">
            <h3>Patient Records</h3>
            <p>Store and access patient records securely.</p>
          </div>
          <div class="feature-card">
            <h3>Invoicing</h3>
            <p>Generate and manage invoices effortlessly.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
