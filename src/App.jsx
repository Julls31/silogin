import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./assets/layout/Layout";
import Home from "./assets/pages/Main/Home";
import Privacy from "./assets/pages/Privacy";
import TermAndCondition from "./assets/pages/TermAndCondition";
import Calculator from "./assets/components/Misc/Calculator";
// import TermsModal from "./assets/components/TermsAndConditions/TermsModal";
import GuideUser from "./assets/components/Guides/GuideUser";
import GuideVendor from "./assets/components/Guides/GuideVendor";

function App() {
  return (
    <div className="bg-base-100">
      {/* <TermsModal /> */}
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
          path="/kebijakan-privasi"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/syarat-ketentuan"
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
        <Route
          path="/panduan-pembeli"
          element={
            <Layout>
              <GuideUser />
            </Layout>
          }
        />
        <Route
          path="/panduan-penyedia"
          element={
            <Layout>
              <GuideVendor />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
