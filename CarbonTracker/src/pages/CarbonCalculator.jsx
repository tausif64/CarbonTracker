import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const CarbonCalculator = () => {
  const [emission, setEmission] = useState("");
  const [creditBalance, setCreditBalance] = useState(0);
  const [resultMessage, setResultMessage] = useState("");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [creditsToUse, setCreditsToUse] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const calculateTreeAndCredit = () => {
    const emissionValue = parseFloat(emission);
    if (isNaN(emissionValue) || emissionValue <= 0) {
      setResultMessage("Please enter a valid emission amount.");
      return;
    }

    const absorptionPerTree = 21.77; // kg/year
    const carbonCreditPerTree = 0.0218; // estimated per year

    const treesNeeded = Math.ceil(emissionValue / absorptionPerTree);
    const creditsGenerated = (treesNeeded * carbonCreditPerTree).toFixed(2);

    setCreditBalance(parseFloat(creditsGenerated));
    setResultMessage(
      `🌳 You need ${treesNeeded} trees to absorb ${emissionValue} kg CO₂. 💰 You can generate ${creditsGenerated} carbon credits.`
    );

    setChartData({
      labels: ["Carbon Emission (kg)", "Trees Needed", "Carbon Credits"],
      datasets: [
        {
          label: "Carbon Calculation Results",
          data: [emissionValue, treesNeeded, creditsGenerated],
          backgroundColor: ["#f44336", "#4caf50", "#2196f3"],
        },
      ],
    });
  };

  const useCredits = () => {
    const amountToUse = parseFloat(creditsToUse);
    if (isNaN(amountToUse) || amountToUse <= 0) {
      setResultMessage("Please enter a valid credit amount.");
      return;
    }

    if (amountToUse > creditBalance) {
      setResultMessage("Insufficient carbon credits.");
      return;
    }

    setCreditBalance(creditBalance - amountToUse);
    setResultMessage(
      `✅ Successfully used ${amountToUse} credits for ${selectedOption}. 🌿 Remaining Balance: ${
        creditBalance - amountToUse
      } credits.`
    );
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-center text-2xl text-green-700 mb-4">
          Carbon Offset Calculator
        </h2>
        <div className="mb-4">
          <label htmlFor="emission" className="block font-bold mb-1">
            Carbon Emission (kg CO₂):
          </label>
          <input
            type="number"
            id="emission"
            value={emission}
            onChange={(e) => setEmission(e.target.value)}
            placeholder="e.g. 500"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={calculateTreeAndCredit}
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-600"
        >
          Calculate
        </button>
        <div className="mt-4 text-green-700 font-bold">{resultMessage}</div>
        {chartData.labels.length > 0 && <Bar data={chartData} />}
      </div>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-2xl text-green-700 mb-4">
          Use Your Carbon Credits
        </h2>
        <div className="mb-4">
          <label className="block font-bold mb-1">
            Your Current Carbon Credits:
          </label>
          <input
            type=" text"
            value={creditBalance.toFixed(2)}
            disabled
            className="w-full p-2 border border-gray-300 rounded bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">
            Choose an Option to Use Credits:
          </label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="flight">Offset a Flight</option>
            <option value="tree">Plant Additional Trees</option>
            <option value="donate">Donate to Green Projects</option>
            <option value="energy">Support Renewable Energy</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">Enter Credits to Use:</label>
          <input
            type="number"
            value={creditsToUse}
            onChange={(e) => setCreditsToUse(e.target.value)}
            placeholder="e.g. 30"
            min="1"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={useCredits}
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-600"
        >
          Use Credits
        </button>
        <div className="mt-4 text-green-700 font-bold">{resultMessage}</div>
      </div>
    </div>
  );
};

export default CarbonCalculator;
