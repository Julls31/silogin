// src/App.jsx
import React, { useEffect, useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./assets/layout/Layout";
import Preloader from "./assets/components/Misc/Preloader";

const Home = lazy(() => import("./assets/pages/Main/Home"));
const Privacy = lazy(() => import("./assets/pages/Privacy"));
const TermAndCondition = lazy(() => import("./assets/pages/TermAndCondition"));
const Calculator = lazy(() => import("./assets/components/Misc/Calculator"));
const GuideUser = lazy(() => import("./assets/components/Guides/GuideUser"));
const GuideVendor = lazy(() => import("./assets/components/Guides/GuideVendor"));
const FAQUser = lazy(() => import("./assets/components/FAQ/FAQUser"));
const FAQVendor = lazy(() => import("./assets/components/FAQ/FAQVendor"));
const NotFound = lazy(() => import("./assets/components/Misc/404NotFound"));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <div className="scroll-smooth bg-base-100 fade-in">
        <Routes>
          <Route path="/login" />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/kebijakan-privasi" element={<Layout><Privacy /></Layout>} />
          <Route path="/syarat-ketentuan" element={<Layout><TermAndCondition /></Layout>} />
          <Route path="/kalkulatorpremi" element={<Layout><Calculator /></Layout>} />
          <Route path="/panduan-pembeli" element={<Layout><GuideUser /></Layout>} />
          <Route path="/panduan-penyedia" element={<Layout><GuideVendor /></Layout>} />
          <Route path="/faq-pembeli" element={<Layout><FAQUser /></Layout>} />
          <Route path="/faq-penyedia" element={<Layout><FAQVendor /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
