import React from "react";
import img5 from "../../assets/11264764.png";
import "./HandlingCancellations.css";

const HandlingCancellations = () => {
  return (
    <div className="handling-cancellations-detail">
      <header className="handling-cancellations-header">
        <h1>Handling Cancellations</h1>
        <p>
          Manage cancellations efficiently while maintaining a positive
          relationship with your clients.
        </p>
      </header>
      <div className="handling-cancellations-content">
        <img
          src={img5}
          alt="Handling Cancellations"
          className="handling-cancellations-image"
        />
        <section className="handling-cancellations-description">
          <h2>Easy Cancellation Process</h2>
          <p>
            Allow clients to cancel appointments with minimal hassle. Our system
            streamlines the cancellation process, making it easy for both you
            and your clients to manage changes.
          </p>
          <h2>Automatic Rescheduling Options</h2>
          <p>
            Provide clients with the option to reschedule instead of canceling
            outright. Our system automatically suggests alternative times based
            on your availability.
          </p>
          <h2>Cancellation Policies</h2>
          <p>
            Implement and enforce cancellation policies to minimize last-minute
            cancellations. Our platform allows you to set rules for fees, notice
            periods, and more.
          </p>
          <h2>Client Communication</h2>
          <p>
            Communicate with clients about cancellations and rescheduling
            options through automated notifications. Keep them informed every
            step of the way.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HandlingCancellations;
