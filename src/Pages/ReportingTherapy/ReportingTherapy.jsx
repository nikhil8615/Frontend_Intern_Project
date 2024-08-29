import React from "react";
import img4 from "../../assets/therapy.png";
import "./ReportingTherapy.css";

const ReportingTherapy = () => {
  return (
    <div className="reporting-therapy-detail">
      <header className="reporting-therapy-header">
        <h1>Reporting Therapy</h1>
        <p>
          Generate detailed reports on therapy sessions and patient progress to
          ensure quality care.
        </p>
      </header>
      <div className="reporting-therapy-content">
        <img
          src={img4}
          alt="Reporting Therapy"
          className="reporting-therapy-image"
        />
        <section className="reporting-therapy-description">
          <h2>Therapy Session Reports</h2>
          <p>
            Document each therapy session with detailed reports. Include session
            notes, patient feedback, and treatment progress to maintain
            comprehensive records.
          </p>
          <h2>Patient Progress Tracking</h2>
          <p>
            Monitor patient progress over time with visual reports. Track key
            metrics, identify trends, and adjust treatment plans as needed to
            ensure the best outcomes.
          </p>
          <h2>Customizable Report Templates</h2>
          <p>
            Use customizable templates to create reports that meet your specific
            needs. Tailor reports to include the most relevant information for
            your practice.
          </p>
          <h2>Data Security</h2>
          <p>
            All reports are stored securely and are accessible only to
            authorized users. Our platform ensures that patient data remains
            confidential at all times.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReportingTherapy;
