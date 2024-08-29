import React from "react";

import img2 from "../../assets/img3.png";
import "./ManagingPatients.css";

const ManagingPatients = () => {
  return (
    <div className="managing-patients-detail">
      <header className="managing-patients-header">
        <h1>Managing Patients</h1>
        <p>
          Efficiently manage patient records and appointments with our
          comprehensive patient management system.
        </p>
      </header>
      <div className="managing-patients-content">
        <img
          src={img2}
          alt="Managing Patients"
          className="managing-patients-image"
        />
        <section className="managing-patients-description">
          <h2>Comprehensive Patient Profiles</h2>
          <p>
            Maintain detailed patient records with demographic information,
            medical history, and treatment plans. Easily access and update
            patient data to ensure accurate and up-to-date information.
          </p>
          <h2>Appointment Management</h2>
          <p>
            Schedule and manage patient appointments with ease. Our system
            allows you to view upcoming appointments, reschedule as needed, and
            track patient attendance.
          </p>
          <h2>Secure Data Storage</h2>
          <p>
            All patient data is securely stored in compliance with healthcare
            regulations. Our platform ensures data integrity and confidentiality
            at all times.
          </p>
          <h2>Communication Tools</h2>
          <p>
            Easily communicate with patients through built-in messaging
            features. Send appointment reminders, follow-up messages, and more
            directly from the system.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ManagingPatients;
