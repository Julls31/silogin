// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./assets/layout/Layout";
import Preloader from "./assets/components/Misc/Preloader";
import AnimatedPage from "./assets/components/Tools/AnimatedPage";

const Home = lazy(() => import("./assets/pages/Main/Home"));
const Privacy = lazy(() => import("./assets/pages/Privacy"));
const TermAndCondition = lazy(() => import("./assets/pages/TermAndCondition"));
const Calculator = lazy(() => import("./assets/components/Misc/Calculator"));
const GuideUser = lazy(() => import("./assets/components/Guides/GuideUser"));
const GuideVendor = lazy(() =>
  import("./assets/components/Guides/GuideVendor")
);
const FAQUser = lazy(() => import("./assets/components/FAQ/FAQUser"));
const FAQVendor = lazy(() => import("./assets/components/FAQ/FAQVendor"));
const NotFound = lazy(() => import("./assets/components/Misc/404NotFound"));

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Preloader />}>
      <div className="scroll-smooth bg-base-100 fade-in">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<AnimatedPage><Home /></AnimatedPage>} />
              <Route path="/kebijakan-privasi" element={<AnimatedPage><Privacy /></AnimatedPage>} />
              <Route path="/syarat-ketentuan" element={<AnimatedPage><TermAndCondition /></AnimatedPage>} />
              <Route path="/kalkulatorpremi" element={<AnimatedPage><Calculator /></AnimatedPage>} />
              <Route path="/panduan-lkpd" element={<AnimatedPage><GuideUser /></AnimatedPage>} />
              <Route path="/panduan-penyedia" element={<AnimatedPage><GuideVendor /></AnimatedPage>} />
              <Route path="/faq-lkpd" element={<AnimatedPage><FAQUser /></AnimatedPage>} />
              <Route path="/faq-penyedia" element={<AnimatedPage><FAQVendor /></AnimatedPage>} />
              <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </Suspense>
  );
}

export default App;
