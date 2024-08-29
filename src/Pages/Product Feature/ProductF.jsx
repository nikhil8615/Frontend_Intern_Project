import React from "react";
import "./FeaturesPage.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/therapy.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/bill.png";
import img5 from "../../assets/11264764.png";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Scheduling and Rescheduling",
    description:
      "Effortlessly schedule and reschedule appointments with our intuitive calendar interface.",
    image: img1,
    link: "/features/scheduling-and-rescheduling",
  },
  {
    title: "Managing Patient Records",
    description:
      "Keep track of patient records and notes securely, ensuring all information is up-to-date.",
    image: img3,
    link: "/features/managing-patient-records",
  },
  {
    title: "Invoicing and Payment Tracking",
    description:
      "Generate invoices and track payments effortlessly, reducing administrative overhead.",
    image: img4,
    link: "/features/invoicing-and-payment-tracking",
  },
  {
    title: "Reporting on Therapy Sessions",
    description:
      "Generate detailed reports on therapy sessions, including monthly and yearly summaries.",
    image: img2,
    link: "/features/reporting-on-therapy-sessions",
  },
  {
    title: "Handling Session Cancellations",
    description:
      "Manage cancellations and rescheduling with ease, ensuring minimal disruption to your operations.",
    image: img5,
    link: "/features/handling-session-cancellations",
  },
];

const ProductFeatures = () => {
  return (
    <div className="product-features">
      <header className="header">
        <h1>Symplify Product Features</h1>
        <p>
          Explore the powerful features designed to streamline your therapy
          center operations.
        </p>
      </header>
      <main>
        {features.map((feature, index) => (
          <section className="feature" key={index}>
            <img
              src={feature.image}
              alt={feature.title}
              className="feature-image"
            />
            <div className="feature-content">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <Link to={feature.link}>
                <button className="read-more-button">Read More</button>
              </Link>
            </div>
          </section>
        ))}
      </main>
      <Link to={"/"}>
        <button className="back_to">Back To Home</button>
      </Link>
    </div>
  );
};

export default ProductFeatures;
