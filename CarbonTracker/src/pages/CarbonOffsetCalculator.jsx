import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CarbonOffsetCalculator = () => {
  const [emission, setEmission] = useState("");
  const [treesNeeded, setTreesNeeded] = useState(0);
  const [carbonCredits, setCarbonCredits] = useState(0);

  const absorptionPerTree = 21.77; // kg CO₂ absorbed per tree per year
  const creditPerKg = 0.001; // 1 credit = 1000 kg CO₂

  const data = {
    labels: ["Trees Needed", "CO₂ Absorption (kg)"],
    datasets: [
      {
        label: "Values",
        data: [treesNeeded, treesNeeded * absorptionPerTree],
        backgroundColor: [
          "rgba(76, 175, 80, 0.5)", // Color for Trees Needed
          "rgba(255, 165, 0, 0.5)", // Color for CO₂ Absorption
        ],
      },
    ],
  };

  useEffect(() => {
    if (emission > 0) {
      const trees = Math.ceil(emission / absorptionPerTree);
      const credits = emission * creditPerKg;
      setTreesNeeded(trees);
      setCarbonCredits(credits);
    } else {
      setTreesNeeded(0);
      setCarbonCredits(0);
    }
  }, [emission]);

  return (
    <div className="max-w-3xl mx-auto my-16 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Carbon Offset Calculator
      </h2>
      <label className="block mt-4 font-semibold" htmlFor="emission">
        Enter Carbon Emission (kg CO₂):
      </label>
      <input
        type="number"
        id="emission"
        value={emission}
        onChange={(e) => setEmission(e.target.value)}
        placeholder="e.g. 1000"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
      />

      <div className="results mt-4 font-bold">
        🌳 Trees Needed: <strong>{treesNeeded}</strong>
        <br />
        💳 Carbon Credits Earned: <strong>{carbonCredits.toFixed(2)}</strong>
      </div>

      <Bar
        data={data}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: "Count / CO₂ Absorption (kg)" },
            },
            x: {
              title: { display: true, text: "Metrics" },
            },
          },
        }}
        className="mt-4"
      />
    </div>
  );
};

export default CarbonOffsetCalculator;
