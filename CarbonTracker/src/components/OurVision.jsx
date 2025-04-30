import React, { useState } from "react";
import { Link } from "react-router-dom";

const OurVision = () => {
  const [isInfoBoxVisible, setInfoBoxVisible] = useState(false);

  const toggleInfo = () => {
    setInfoBoxVisible((prev) => !prev);
  };

  return (
    <div
      id="our-vision"
      className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-center text-3xl text-blue-600 mb-5">
        Our Vision for a Greener Future
      </h1>

      {/* Section 1: Carbon Emission Impact */}
      <div className="section mb-8" id="carbonImpact">
        <h2 className="text-blue-600 text-xl mb-2">
          How Carbon Emissions Affect the Environment
        </h2>
        <p className="text-gray-600">
          Carbon emissions from industrial activities, transportation, and
          deforestation are the leading cause of global warming. The excess
          carbon dioxide (CO2) in the atmosphere traps heat, resulting in rising
          global temperatures and extreme weather events. This has disastrous
          effects on ecosystems, biodiversity, and human health.
        </p>
        <img
          src="carbon-dioxide-emissions-title-1200x800.jpg"
          alt="Carbon Emissions Impact"
          className="rounded-lg mt-4"
        />
      </div>

      {/* Section 2: Planting Trees */}
      <div className="section mb-8" id="plantingTrees">
        <h2 className="text-blue-600">
          How Planting Trees Can Help Control Carbon Emissions
        </h2>
        <p className="text-gray-600">
          Trees naturally absorb carbon dioxide from the atmosphere through
          photosynthesis. When we plant trees, we increase the Earth's ability
          to absorb excess CO2, helping to reduce the greenhouse effect. Forests
          act as carbon sinks and are vital in controlling global warming.
        </p>
        <img
          src="treeessss.webp"
          alt="Planting Trees"
          className="rounded-lg mt-4"
        />
        <div className="mt-4">
          <Link
            to="/carbon-offset-calculator"
            className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
          >
            Check Tree Calculator
          </Link>
        </div>
      </div>

      {/* Section 3: Carbon Credits */}
      <div className="section mb-8" id="carbonCredits">
        <h2 className="text-blue-600">What Are Carbon Credits?</h2>
        <p className="text-gray-600">
          Carbon credits are permits that allow the holder to emit a certain
          amount of carbon dioxide or other greenhouse gases. These credits are
          issued by governments or organizations, and they can be traded in a
          carbon market. The goal is to incentivize the reduction of emissions
          by placing a price on carbon pollution.
        </p>
        <img
          src="LIFE-CYCLE-OF-A-CARBON-OFFSET.jpg"
          alt="Carbon Credits"
          className="rounded-lg mt-4"
        />
      </div>

      {/* Section 4: Steps to Control Carbon Emissions */}
      <div className="section mb-8" id="stepsToControl">
        <h2 className="text-blue-600">
          Steps We Can Take to Control Carbon Emissions
        </h2>
        <ul className="list-disc ml-5 text-gray-600">
          <li>
            <h3>Reduce Energy Consumption:</h3>
            <p>
              At Home: Improve insulation, use energy-efficient appliances, LED
              lighting, and smart thermostats.
            </p>
            <p>
              At Work: Implement energy-efficient lighting and equipment,
              optimize HVAC systems, and encourage mindful energy use.
            </p>
          </li>
          <li>
            <h3>Switch to Renewable Energy:</h3>
            <p>
              At Home: Consider solar panels, wind turbines, or switch to
              renewable energy providers.
            </p>
            <p>
              At Work: Invest in renewable energy projects or purchase renewable
              energy credits.
            </p>
          </li>
          <li>
            <h3>Improve Transportation Efficiency:</h3>
            <p>
              Personal: Walk, bike, or use public transportation for shorter
              trips, carpool, and drive efficiently.
            </p>
            <p>
              Business: Optimize fleet vehicles, encourage hybrid/electric
              vehicles, and reduce business travel when possible.
            </p>
          </li>
          <li>
            <h3>Reduce Waste and Food Consumption:</h3>
            <p>
              At Home: Reduce food waste, compost scraps, recycle effectively,
              and minimize plastic consumption.
            </p>
            <p>
              At Work: Implement waste reduction programs, composting
              initiatives, and explore sustainable packaging options.
            </p>{" "}
          </li>
          <li>
            <h3>Choose Sustainable Products and Services:</h3>
            <p>
              At Home: Buy local and seasonal food, choose reusable items, and
              support sustainable businesses.
            </p>
            <p>
              At Work: Partner with sustainable suppliers, implement sustainable
              purchasing practices, and consider carbon offsetting.
            </p>
          </li>
          <li>
            <h3>Carbon Offsetting:</h3>
            <p>
              At Home: Consider offsetting your remaining emissions through
              projects like reforestation or renewable energy.
            </p>
            <p>
              At Work: Implement carbon offsetting programs to balance your
              company's footprint.
            </p>
          </li>
          <li>
            <h3>Promote Sustainable Practices:</h3>
            <p>
              At Home: Educate yourself and others on sustainable living and
              encourage positive changes.
            </p>
            <p>
              At Work: Implement sustainability initiatives, engage employees,
              and track your progress.
            </p>
          </li>
          <li>
            <h3>Support Sustainable Infrastructure:</h3>
            <p>
              At Home: Advocate for policies that promote sustainable
              infrastructure, like public transportation and renewable energy.
            </p>
            <p>
              At Work: Support sustainable infrastructure projects and policies
              that benefit the environment.
            </p>
          </li>
          <li>
            <h3>Reduce Meat Consumption:</h3>
            <p>
              At Home: Eat less red meat, as it has a higher carbon footprint
              than other protein sources.
            </p>
            <p>
              At Work: Encourage vegetarian or vegan options in company meals
              and events.
            </p>
          </li>
          <li>
            <h3>Embrace Circular Economy:</h3>
            <p>
              At Home: Repair, reuse, and recycle items instead of throwing them
              away.
            </p>
            <p>
              At Work: Implement circular economy strategies in your supply
              chain, like reducing waste and promoting reuse.
            </p>
          </li>
        </ul>
      </div>

      {/* More Info Button */}
      <button
        onClick={toggleInfo}
        className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
      >
        Learn More About Carbon Credits
      </button>
      <div className="section" id="imgcarbon">
        <img
          className="imgcarbon rounded-lg mt-4"
          src="carbonnnimg.webp"
          alt="carbon credit"
        />
      </div>
      {/* Info Box (hidden by default) */}
      {isInfoBoxVisible && (
        <div
          id="infoBox"
          className="mt-8 p-4 bg-blue-100 border border-blue-300 rounded-lg"
        >
          <p className="text-gray-600">
            Carbon credits are a part of a global effort to reduce emissions.
            Companies or individuals who emit less carbon than their assigned
            limit can sell their extra carbon credits to others, creating an
            economic incentive to reduce emissions. This system encourages
            cleaner production processes and helps in mitigating climate change.
          </p>
          <h2 className="text-blue-600">How Do Carbon Credits Work?</h2>
          <ul className="list-disc ml-5 text-gray-600">
            <li>
              Cap-and-Trade: Governments set emission limits ("caps"); companies
              trade surplus credits
            </li>
            <li>Example: California’s program covers 85% of state emissions</li>
            <li>
              Baseline-and-Credit: Entities exceeding targets buy credits from
              those under-utilizing allowances (e.g., India’s new Carbon Credit
              Trading Scheme).
            </li>
            <li>Plant more trees and generate more credit.</li>
          </ul>
          <h2 className="text-blue-600">Credits are generated through:</h2>
          <ul className="list-disc ml-5 text-gray-600">
            <li>
              Reduction: Lowering emissions (e.g., methane capture from
              landfills)
            </li>
            <li>
              Removal: Sequestering CO₂ (e.g., reforestation, direct air
              capture)
            </li>
            <li>
              Avoidance: Preventing future emissions (e.g., renewable energy
              projects)
            </li>
          </ul>
          <h2 className="text-blue-600">Types of Carbon Credits</h2>
          <ul className="list-disc ml-5 text-gray-600">
            <li>Renewable Energy Credits (RECs): Support wind/solar power.</li>
            <li>Carbon Sequestration: Reforestation or soil carbon storage.</li>
            <li>Methane Capture: From coal mines, livestock, or landfills.</li>
          </ul>
          <h2 className="text-blue-600">Benefits of Carbon Credits</h2>
          <ul className="list-disc ml-5 text-gray-600">
            <li>
              Cost-Effective Reductions: Cheaper for companies to buy credits
              than overhaul operations
            </li>
            <li>
              Co -Benefits: Biodiversity conservation, community jobs (e.g.,
              tribal land projects in the U.S.)
            </li>
            <li>
              Global Reach: Funds flow to developing countries for clean energy
              projects
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OurVision;
