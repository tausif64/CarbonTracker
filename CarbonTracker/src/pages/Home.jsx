import React from "react";

import EmissionDashboard from "../components/Dashboard";
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className="flex min-h-[100vh] flex-col bg-[#fff]">
      <section className="bg-[url('https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-care-for-the-environment-low-carbon-travel-public-welfare-poster-image_137867.jpg')] bg-cover bg-center text-white py-20 text-center animate-fadeIn">
        <div className="container mx-auto">
          <h1 className="text-4xl mb-4 animate-slideUp font-bold text-[#2e7d32]">
            Coal Mine Carbon Neutrality Platform
          </h1>
          <p className="font-bold text-[#2e7d32]">
            Real-time monitoring and reduction of mining emissions with
            AI-driven insights
          </p>
          <Link
            className="inline-block bg-[#2e7d32] text-white py-3 px-6 rounded-md font-bold mt-4 transition-all hover:bg-[#2980b9] transform hover:-translate-y-1 shadow-md"
            to="/carbon-emission-calculator"
          >
            Try Emission Calculator
          </Link>
        </div>
      </section>

      <section id="solutions" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl mb-8 text-[#2c3e50] relative inline-block left-1/2 transform -translate-x-1/2 section-title">
            Our Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform hover:translate-y-[-5px]">
              <h3 className="text-[#3498db] text-xl font-bold mb-4">
                Emission Calculator
              </h3>
              <p>
                Emissions are calculated for various activities involved in
                operations, including excavation, transportation, fuel
                consumption, and equipment usage. Below are the formulas and
                explanations for each calculation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform hover:translate-y-[-5px]">
              <h3 className="text-[#3498db] text-xl font-bold mb-4">
                Carbon credit and tree plantation calculator
              </h3>
              <p>
                This calculator calculates the amount of carbon credits
                generated based on the amount of carbon emissions produced. Also
                tell how it affects the overall carbon footprint and the number
                of trees needed for offsetting.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform hover:translate-y-[-5px]">
              <h3 className="text-[#3498db] text-xl font-bold mb-4">
                Emission Graph
              </h3>
              <p>
                Visualize emissions trends over time to identify patterns and
                areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EmissionDashboard />
      <section id="data" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl mb-8 text-[#2c3e50] relative inline-block left-1/2 transform -translate-x-1/2 section-title">
            Coal Mining Emission Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3>Global Impact</h3>
              <p>
                Coal mining contributes 10% of global methane emissions (IEA
                2023).
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3>Indian Context</h3>
              <p>
                Indian coal mines emit ~2.5 kg CO₂e per ton of coal extracted.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3>Mitigation Potential</h3>
              <p>
                40-60% emission reduction achievable with existing technologies.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3>Financial Impact</h3>
              <p>
                Every 1,000 tons CO₂ reduced can generate $5,000 in carbon
                credits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
