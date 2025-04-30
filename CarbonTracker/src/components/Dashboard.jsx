import React, { useEffect, useState } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const EmissionDashboard = () => {
  const [trendData, setTrendData] = useState([
    1200, 1150, 1100, 1050, 1000, 950,
  ]);

  const [reductionData, setReductionData] = useState([1200, 2500, 800, 400]);

  const trendChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "CO₂e Emissions (tons)",
        data: trendData,
        borderColor: "#3498db",
        backgroundColor: "rgba(52, 152, 219, 0.1)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const reductionChartData = {
    labels: ["EV Transition", "Methane Capture", "Solar Power", "Efficiency"],
    datasets: [
      {
        label: "Potential Reduction (tons CO₂e/year)",
        data: reductionData,
        backgroundColor: [
          "rgba(52, 152, 219, 0.7)",
          "rgba(46, 204, 113, 0.7)",
          "rgba(241, 196, 15, 0.7)",
          "rgba(155, 89, 182, 0.7)",
        ],
      },
    ],
  };


  useEffect(() => {
    const interval = setInterval(() => {
      // Update trend chart with new data point
      setTrendData((prevData) => {
        const lastValue = prevData[prevData.length - 1];
        const newValue = lastValue * (0.95 + Math.random() * 0.1); // Random fluctuation
        const newData = [...prevData.slice(1), Math.round(newValue)];
        return newData;
      });

      // Update reduction chart data randomly
      setReductionData((prevData) => {
        return prevData.map(() => Math.round(Math.random() * 3000)); // Random values between 0 and 3000
      });
      
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="dashboard" className="py-12 bg-[#ecf0f1]">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl mb-8 text-[#2c3e50] relative inline-block left-1/2 transform -translate-x-1/2 section-title">
          Live Emission Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3>Current Emission Sources</h3>
            <div className="chart-container relative h-72 w-full">
              <Doughnut
                data={reductionChartData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3>Monthly Trend</h3>
            <div className="chart-container relative h-72 w-full">
              <Line
                data={trendChartData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3>Reduction Opportunities</h3>
            <div className=" chart-container relative h-72 w-full">
              <Bar
                data={reductionChartData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmissionDashboard;
