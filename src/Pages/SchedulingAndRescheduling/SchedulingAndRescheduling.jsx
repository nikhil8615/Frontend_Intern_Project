import React from "react";
import img1 from "../../assets/img1.png";
import "./FeatureDetail.css";

const SchedulingAndRescheduling = () => {
  return (
    <div className="scheduling-rescheduling-detail">
      <header className="scheduling-rescheduling-header">
        <h1>Scheduling and Rescheduling</h1>
        <p>
          Streamline your appointment management with our powerful scheduling
          and rescheduling features, designed to save time and reduce no-shows.
        </p>
      </header>
      <div className="scheduling-rescheduling-content">
        <img
          src={img1}
          alt="Scheduling and Rescheduling"
          className="scheduling-rescheduling-image"
        />
        <section className="scheduling-rescheduling-description">
          <h2>Intuitive Calendar Interface</h2>
          <p>
            Our user-friendly calendar interface allows you to schedule
            appointments effortlessly. Drag and drop functionality makes it easy
            to reschedule appointments, ensuring that your calendar is always up
            to date. The color-coded time slots help you identify availability
            at a glance, while the option to view daily, weekly, or monthly
            schedules gives you complete control over your bookings.
          </p>
          <h2>Automated Reminders</h2>
          <p>
            Reduce no-shows with automated reminders sent via email or SMS.
            Patients receive reminders based on your preferences, ensuring they
            are always informed about their upcoming appointments. You can
            customize the reminder messages and timing to match your workflow.
          </p>
          <h2>Seamless Rescheduling</h2>
          <p>
            When changes are needed, rescheduling is a breeze. Simply drag an
            appointment to a new time slot, or use the rescheduling tool to find
            the next available time that suits both you and your patient. Our
            system automatically updates all related records, so you can be
            confident that nothing is missed.
          </p>
          <h2>Sync with Google Calendar</h2>
          <p>
            Keep your schedule in sync across platforms by integrating with
            Google Calendar. All appointments, reschedules, and cancellations
            are automatically reflected in your Google Calendar, ensuring you
            have access to your schedule wherever you are.
          </p>
          <h2>Customizable Booking Rules</h2>
          <p>
            Define specific booking rules such as minimum notice periods,
            cancellation policies, and buffer times between appointments. These
            settings help you maintain control over your schedule and prevent
            last-minute disruptions.
          </p>
          <h2>24/7 Online Booking</h2>
          <p>
            Patients can book or reschedule appointments online at any time,
            from any device. Our mobile-friendly booking system ensures that
            your patients can access your services whenever it's convenient for
            them.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SchedulingAndRescheduling;
