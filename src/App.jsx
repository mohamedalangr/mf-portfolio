import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";


const Home = lazy(() => import("./pages/Home.jsx"));
const CaseStudy = lazy(() => import("./pages/CaseStudy.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="page-transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <AnimatedRoutes />
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </>
  );
}
