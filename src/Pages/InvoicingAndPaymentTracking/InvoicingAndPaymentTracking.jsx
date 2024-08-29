import React from "react";

import img3 from "../../assets/bill.png";
import "./InvoicingAndPaymentTracking.css";

const InvoicingAndPaymentTracking = () => {
  return (
    <div className="invoicing-payment-detail">
      <header className="invoicing-payment-header">
        <h1>Invoicing and Payment Tracking</h1>
        <p>
          Keep track of all your invoices and payments with our integrated
          financial management tools.
        </p>
      </header>
      <div className="invoicing-payment-content">
        <img
          src={img3}
          alt="Invoicing and Payment Tracking"
          className="invoicing-payment-image"
        />
        <section className="invoicing-payment-description">
          <h2>Generate Professional Invoices</h2>
          <p>
            Create detailed invoices with ease. Our system allows you to add
            custom fields, apply taxes, and generate invoices in multiple
            formats. Send them directly to clients via email.
          </p>
          <h2>Automated Payment Reminders</h2>
          <p>
            Ensure timely payments with automated reminders. Our system tracks
            due dates and sends notifications to clients for overdue invoices.
          </p>
          <h2>Track Payments</h2>
          <p>
            Monitor all incoming payments and track outstanding balances. Our
            dashboard provides a clear overview of your financial status at any
            time.
          </p>
          <h2>Financial Reporting</h2>
          <p>
            Generate comprehensive financial reports that provide insights into
            your revenue streams, expenses, and profitability. Customize reports
            to focus on specific aspects of your business.
          </p>
        </section>
      </div>
    </div>
  );
};

export default InvoicingAndPaymentTracking;
