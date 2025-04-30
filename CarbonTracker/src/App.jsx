import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import EmissionDashboard from "./components/Dashboard";
import FourmulaPage from "./pages/Display";
import Analysis from "./pages/Analysis";
import ContactUs from "./pages/ContactUs";
import CarbonCalculator from "./pages/CarbonCalculator";
import AboutUsNew from "./pages/AboutUsNew";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-dashboard" element={<EmissionDashboard />} />
        <Route path="/fourmula" element={<FourmulaPage />} />
        <Route path="/carbon-emission-calculator" element={<Analysis />} />
        <Route
          path="/carbon-offset-calculator"
          element={<CarbonCalculator />}
        />
        <Route path="/about" element={<AboutUsNew />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
