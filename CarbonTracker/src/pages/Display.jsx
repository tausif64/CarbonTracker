import React from 'react';
// Updated constants
const EXCAVATION_FACTOR = 94.6; // kg CO2 per ton of coal mined
const TRANSPORTATION_FACTOR = 74.1; // kg CO2 per ton per km (for diesel-powered transportation)
const EQUIPMENT_FACTOR = 73.3; // kg CO2 per hour of equipment operation
const EV_CONSTANT = 0.20;
const GREEN_FUEL_CONSTANT = 0.50;
const SEQUESTRATION_RATE = 2.2;
const ELECTRICITY_REDUCTION_RATE = 0.3;

const FourmulaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 sm:py-12">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300">
          <div className="bg-gradient-to-r from-blue-300 to-teal-300 text-white py-8">
            <h1 className="text-5xl font-bold text-center">
              CarbonTracker Project Calculations
            </h1>
            <p className="text-lg text-center mt-2 font-medium">
              An in-depth look at the calculations used in the CarbonTracker
              project, detailing emissions and neutralization pathways.
            </p>
          </div>

          <div className="p-4 md:p-10 space-y-10">
            {/* Section 1: Emission Calculations */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-2 border-teal-400 pb-2">
                1. Emission Calculations
              </h2>
              <p className="text-base text-gray-700 mb-6">
                Emissions are calculated for various activities involved in
                operations, including excavation, transportation, fuel
                consumption, and equipment usage. Below are the formulas and
                explanations for each calculation.
              </p>

              <div className="space-y-8">
                {/* Excavation Emissions */}
                <div className="bg-gradient-to-r from-green-50 to-green-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-green-800">
                    Excavation Emissions
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      E = A × {EXCAVATION_FACTOR}
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>E</strong>: Total excavation emissions (kg CO2).
                      </li>
                      <li>
                        <strong>A</strong>: Amount of excavation material in
                        tons.
                      </li>
                      <li>
                        <strong>Excavation Factor</strong>: Emission factor for
                        excavation ({EXCAVATION_FACTOR} kg CO2 per ton).
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> This formula
                    calculates the emissions generated during the excavation
                    process by multiplying the amount of material excavated by a
                    predefined emission factor. The `EXCAVATION_FACTOR`
                    indicates the amount of CO2 produced per ton of material
                    excavated.
                  </div>
                </div>

                {/* Transportation Emissions */}
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-yellow-800">
                    Transportation Emissions
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      T = C × D × F
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>T</strong>: Total transportation emissions (kg
                        CO2).
                      </li>
                      <li>
                        <strong>C</strong>: Distance traveled (km).
                      </li>
                      <li>
                        <strong>D</strong>: Emission factor for transportation (
                        {TRANSPORTATION_FACTOR} kg CO2 per km).
                      </li>
                      <li>
                        <strong>F</strong>: Fuel consumption factor.
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> Transportation
                    emissions are calculated by considering the distance
                    traveled, the emission factor for transportation, and the
                    amount of fuel consumed. The `TRANSPORTATION_FACTOR`
                    represents the CO2 emitted per kilometer traveled.
                  </div>
                </div>

                {/* Fuel Consumption Emissions */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-blue-800">
                    Fuel Consumption Emissions
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      F = E × {GREEN_FUEL_CONSTANT}
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>F</strong>: Total fuel consumption emissions (kg
                        CO2).
                      </li>
                      <li>
                        <strong>E</strong>: Amount of fuel consumed (liters).
                      </li>
                      <li>
                        <strong>Fuel Factor</strong>: Emission factor for fuel (
                        {GREEN_FUEL_CONSTANT} kg CO2 per liter).
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> This formula
                    calculates the emissions resulting from fuel consumption.
                    The `GREEN_FUEL_CONSTANT` reflects the CO2 emissions per
                    liter of fuel consumed, which helps in understanding the
                    carbon footprint associated with fuel usage.
                  </div>
                </div>

                {/* Equipment Usage Emissions */}
                <div className="bg-gradient-to-r from-purple-50 to-purple-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-purple-800">
                    Equipment Usage Emissions
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      G = H × {EQUIPMENT_FACTOR}
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>G</strong>: Total equipment usage emissions (kg
                        CO2).
                      </li>
                      <li>
                        <strong>H</strong>: Number of hours equipment is used.
                      </li>
                      <li>
                        <strong>Equipment Factor</strong>: Emission factor for
                        equipment usage ({EQUIPMENT_FACTOR} kg CO2 per hour).
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> Equipment emissions
                    are calculated based on the total hours the equipment is in
                    use and its specific emission factor. The `EQUIPMENT_FACTOR`
                    indicates the CO2 emissions per hour of equipment operation.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Total Emissions Calculation */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-2 border-teal-400 pb-2">
                2. Total Emissions Calculation
              </h2>
              <div className="text-base text-gray-700 mb-6">
                The total emissions are computed by aggregating the emissions
                from excavation, transportation, fuel consumption, and equipment
                usage.
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-pink-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                <div className="text-base text-gray-800">
                  <strong>Formula:</strong>{" "}
                  <code className="bg-gray-100 p-1 rounded">
                    Total Emissions = E + T + F + G
                  </code>
                  <br />
                  <strong>Where:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      <strong>E</strong>: Excavation emissions.
                    </li>
                    <li>
                      <strong>T</strong>: Transportation emissions.
                    </li>
                    <li>
                      <strong>F</strong>: Fuel consumption emissions.
                    </li>
                    <li>
                      <strong>G</strong>: Equipment usage emissions.
                    </li>
                  </ul>
                  <strong>Detailed Explanation:</strong> This formula
                  consolidates all individual emission factors to present the
                  total carbon footprint of the operational activities. By
                  summing up the emissions from all sources, it provides an
                  overview of the total environmental impact.
                </div>
              </div>
            </section>

            {/* Section 3: Neutralization Strategies */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-2 border-teal-400 pb-2">
                3. Neutralization Strategies
              </h2>
              <div className="text-base text-gray-700 mb-6">
                Strategies to neutralize emissions include using electric
                vehicles (EVs), green fuels, and afforestation. Below are the
                methods and their impact.
              </div>
              <div className="space-y-8">
                {/* EV Reduction */}
                <div className="bg-gradient-to-r from-teal-50 to-teal-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-teal-800">
                    Electric Vehicle (EV) Reduction
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      EV Reduction = E × {EV_CONSTANT}
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>EV Reduction</strong>: Reduction in emissions by
                        using EVs (kg CO2).
                      </li>
                      <li>
                        <strong>E</strong>: Total emissions from transportation.
                      </li>
                      <li>
                        <strong>EV Constant</strong>: Reduction rate of EVs (
                        {EV_CONSTANT}).
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> This formula
                    calculates the emissions reduction achieved by using
                    electric vehicles. The `EV_CONSTANT` reflects the efficiency
                    of EVs in reducing CO2 emissions compared to conventional
                    vehicles.
                  </div>
                </div>

                {/* Green Fuel Reduction */}
                <div className="bg-gradient-to-r from-red-50 to-red-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-red-800">
                    Green Fuel Reduction
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      Green Fuel Reduction = F × {GREEN_FUEL_CONSTANT}
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>Green Fuel Reduction</strong>: Reduction in
                        emissions using green fuels (kg CO2).
                      </li>
                      <li>
                        <strong>F</strong>: Total fuel consumption emissions.
                      </li>
                      <li>
                        <strong>Green Fuel Constant</strong>: Reduction rate by
                        green fuels ({GREEN_FUEL_CONSTANT}).
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> This formula measures
                    the emissions reduction achieved by using green fuels. The
                    `GREEN_FUEL_CONSTANT` represents the effectiveness of green
                    fuels in cutting down CO2 emissions.
                  </div>
                </div>

                {/* Afforestation */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-orange-800">
                    Afforestation
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      Afforestation = E × {SEQUESTRATION_RATE}
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>Afforestation</strong>: CO2 absorbed by
                        afforestation (tons CO2).
                      </li>
                      <li>
                        <strong>E</strong>: Total emissions.
                      </li>
                      <li>
                        <strong>Sequestration Rate</strong>: CO2 sequestration
                        rate per ton of CO2 ({SEQUESTRATION_RATE}).
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> This formula
                    calculates the CO2 reduction achieved through afforestation.
                    The `SEQUESTRATION_RATE` indicates the amount of CO2
                    absorbed per ton of CO2 sequestered.
                  </div>
                </div>

                {/* Renewable Energy Reduction */}
                <div className="bg-gradient-to-r from-cyan-50 to-cyan-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-cyan-800">
                    Renewable Energy Reduction
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      Renewable Energy Reduction = E ×{" "}
                      {ELECTRICITY_REDUCTION_RATE}
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>Renewable Energy Reduction</strong>: Reduction
                        in emissions due to renewable energy (kg CO2).
                      </li>
                      <li>
                        <strong>E</strong>: Total emissions.
                      </li>
                      <li>
                        <strong>Electricity Reduction Rate</strong>: Reduction
                        rate due to renewable energy (
                        {ELECTRICITY_REDUCTION_RATE}).
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> This formula
                    calculates the reduction in emissions due to the use of
                    renewable energy. The `ELECTRICITY_REDUCTION_RATE` reflects
                    the efficiency of renewable energy sources in reducing CO2
                    emissions.
                  </div>
                </div>
              </div>
            </section>
            {/* Carbon Credits Section */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-2 border-teal-400 pb-2">
                4.Carbon Credits
              </h2>
              <p className="text-base text-gray-700 mb-6">
                Carbon credits represent a permit allowing an entity to emit a
                certain amount of carbon dioxide or other greenhouse gases.
                Below are the calculations for determining carbon credits and
                their monetary value.
              </p>
              <div className="space-y-8">
                {/* Fuel Emissions */}
                <div className="bg-gradient-to-r from-green-50 to-green-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-green-800">
                    Fuel Emissions
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      fuel_emissions = fuel × fuel_emission_factor
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>fuel_emissions</strong>: Emissions from fuel
                        consumption (kg CO2).
                      </li>
                      <li>
                        <strong>fuel</strong>: Quantity of fuel consumed.
                      </li>
                      <li>
                        <strong>fuel_emission_factor</strong>: Emission factor
                        for the specific fuel.
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> This formula
                    calculates the emissions generated from fuel consumption,
                    using the fuel quantity and its emission factor.
                  </div>
                </div>

                {/* Total Emissions */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-blue-800">
                    Total Emissions
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      total_emissions = annualcoal × COAL_CO2_EMISSION_FACTOR +
                      fuel_emissions
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>total_emissions</strong>: Total greenhouse gas
                        emissions (kg CO2).
                      </li>
                      <li>
                        <strong>annualcoal</strong>: Annual coal usage (tons).
                      </li>
                      <li>
                        <strong>COAL_CO2_EMISSION_FACTOR</strong>: CO2 emitted
                        per ton of coal.
                      </li>
                      <li>
                        <strong>fuel_emissions</strong>: Emissions from fuel
                        consumption (from previous calculation).
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> This formula
                    calculates the total emissions from both coal consumption
                    and fuel usage.
                  </div>
                </div>

                {/* Baseline Emissions */}
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-yellow-800">
                    Baseline Emissions
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      baselineemissions = total_emissions
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>baselineemissions</strong>: Emissions without
                        reduction measures (kg CO2).
                      </li>
                      <li>
                        <strong>total_emissions</strong>: Total greenhouse gas
                        emissions.
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> Baseline emissions
                    represent the "business-as-usual" scenario where no
                    reduction measures are applied.
                  </div>
                </div>

                {/* Carbon Credits */}
                <div className="bg-gradient-to-r from-purple-50 to-purple-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-purple-800">
                    Carbon Credits
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      carboncredits = baselineemissions - reduced
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>carboncredits</strong>: Number of carbon credits
                        earned (tons CO2).
                      </li>
                      <li>
                        <strong>baselineemissions</strong>: Emissions without
                        reduction measures.
                      </li>
                      <li>
                        <strong>reduced</strong>: Emissions after applying
                        reduction measures.
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> Carbon credits are
                    calculated by comparing the baseline emissions with the
                    reduced emissions.
                  </div>
                </div>

                {/* Carbon Credit Worth */}
                <div className="bg-gradient-to-r from-pink-50 to-pink-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-pink-800">
                    Carbon Credit Worth
                  </h3>
                  <div className="text-base text-gray-800 mt-4">
                    <strong>Formula:</strong>{" "}
                    <code className="bg-gray-100 p-1 rounded">
                      worth = carboncredits × cost_per_cc
                    </code>
                    <br />
                    <strong>Where:</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <strong>worth</strong>: Monetary value of the carbon
                        credits.
                      </li>
                      <li>
                        <strong>carboncredits</strong>: Number of carbon credits
                        earned.
                      </li>
                      <li>
                        <strong>cost_per_cc</strong>: Cost per carbon credit
                        (typically in dollars per metric ton of CO2).
                      </li>
                    </ul>
                    <strong>Detailed Explanation:</strong> This formula
                    calculates the financial worth of the carbon credits earned,
                    based on the number of credits and their market value.
                  </div>
                </div>
              </div>
            </section>
            {/* References Section */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                References
              </h2>
              <div className="space-y-6">
                {/* Reference 1 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    2006 IPCC Guidelines for National Greenhouse Gas Inventories
                  </h3>
                  <div className="text-base text-gray-700 mt-4">
                    These guidelines provide methodologies for estimating
                    greenhouse gas emissions and removals.
                    <br />
                    <a
                      href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to IPCC Mobile Combustion Guidelines
                    </a>
                    <br />
                    <a
                      href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to IPCC Stationary Combustion Guidelines
                    </a>
                  </div>
                </div>

                {/* Reference 2 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Carbon Footprint Reduction from EVs
                  </h3>
                  <div className="text-base text-gray-700 mt-4">
                    EVs typically reduce carbon emissions by 20%-30% compared to
                    conventional vehicles.
                    <br />
                    <a
                      href="https://www.iea.org/reports/global-ev-outlook-2023"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to IEA Global EV Outlook 2023
                    </a>
                  </div>
                </div>

                {/* Reference 3 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Carbon Footprint Reduction from Cleaner Fuels
                  </h3>
                  <div className="text-base text-gray-700 mt-4">
                    Switching from coal to natural gas can reduce carbon
                    emissions by about 50%.
                    <br />
                    <a
                      href="https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to EPA Greenhouse Gas Emissions from Passenger
                      Vehicles
                    </a>
                  </div>
                </div>

                {/* Reference 4 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Afforestation Sequestration Rate
                  </h3>
                  <div className="text-base text-gray-700 mt-4">
                    Afforestation sequesters approximately 2.2 tons of carbon
                    per hectare per year.
                    <br />
                    <a
                      href="https://www.ipcc.ch/srccl/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to IPCC Special Report on Climate Change and Land
                    </a>
                  </div>
                </div>

                {/* Reference 5 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Renewable Energy Reduction
                  </h3>
                  <div className="text-base text-gray-700 mt-4">
                    Renewable energy can reduce electricity consumption and
                    carbon emissions by up to 30%.
                    <br />
                    <a
                      href="https://www.irena.org/publications/2022/Dec/Renewable-Energy-and-Jobs-Annual-Review-2022"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to IRENA Renewable Energy and Jobs Annual Review 2022
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourmulaPage;
