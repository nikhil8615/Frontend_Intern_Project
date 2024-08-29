import React from "react";

import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";

import FeaturesPage from "./Pages/Product Feature/ProductF";

import ProductFeatures from "./Pages/Product Feature/ProductF";

import SchedulingAndRescheduling from "./Pages/SchedulingAndRescheduling/SchedulingAndRescheduling";
import ManagingPatients from "./Pages/ManagingPatients/ManagingPatients";
import InvoicingAndPaymentTracking from "./Pages/InvoicingAndPaymentTracking/InvoicingAndPaymentTracking";
import ReportingTherapy from "./Pages/ReportingTherapy/ReportingTherapy";
import HandlingCancellations from "./Pages/HandlingCancellations/HandlingCancellations";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productf" element={<FeaturesPage />} />
        <Route
          path="/features/scheduling-and-rescheduling"
          element={<SchedulingAndRescheduling />}
        />
        <Route
          path="/features/managing-patient-records"
          element={<ManagingPatients />}
        />
        <Route
          path="/features/invoicing-and-payment-tracking"
          element={<InvoicingAndPaymentTracking />}
        />
        <Route
          path="/features/reporting-on-therapy-sessions"
          element={<ReportingTherapy />}
        />
        <Route
          path="/features/handling-session-cancellations"
          element={<HandlingCancellations />}
        />
      </Routes>
    </>
  );
};

export default App;
