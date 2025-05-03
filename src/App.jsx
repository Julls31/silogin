import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./assets/layout/Layout";
import Home from "./assets/pages/Main/Home";
import Privacy from "./assets/pages/Privacy";
import TermAndCondition from "./assets/pages/TermAndCondition";
import Calculator from "./assets/components/Misc/Calculator";
import TermsModal from "./assets/components/TermsAndConditions/TermsModal";

function App() {
  return (
    <div className="bg-base-100">
      <TermsModal />
      <Routes>
        {/* Route khusus login tanpa layout */}
        <Route path="/login" />

        {/* Route dengan layout wrapper */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TermAndCondition />
            </Layout>
          }
        />
        <Route
          path="/kalkulatorpremi"
          element={
            <Layout>
              <Calculator />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
