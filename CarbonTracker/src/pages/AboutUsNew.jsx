import React, { useState } from 'react';

const AboutUsNew = () => {
   const [isInfoBoxVisible, setInfoBoxVisible] = useState(false);
  
    const toggleInfo = () => {
      setInfoBoxVisible((prev) => !prev);
    };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-50 sm:py-12">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300">
          <div className="bg-gradient-to-r from-blue-300 to-teal-300 text-white py-8">
            <h1 className="text-5xl font-bold text-center">About Us</h1>
            <p className="text-lg text-center mt-2 font-medium">
              Our Vision for a Greener Future
            </p>
          </div>

          <div className="p-4 md:p-10 space-y-10">
            <section>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-green-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-green-800">
                    Mission
                  </h3>
                  <p className="text-base text-gray-800 mt-4">
                    We aim to revolutionize the tech industry by creating
                    innovative products that solve real-world problems. Our
                    mission is to empower people to achieve more through
                    technology.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-yellow-800">
                    Our Vision
                  </h3>
                  <p className="text-base text-gray-800 mt-4">
                    We envision a world where technology is accessible,
                    affordable, and beneficial to everyone, regardless of their
                    background or location.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-blue-800">
                    How Carbon Emissions Affect the Environment
                  </h3>
                  <p className="text-base text-gray-800 mt-4">
                    Carbon emissions from industrial activities, transportation,
                    and deforestation are the leading cause of global warming.
                    The excess carbon dioxide (CO2) in the atmosphere traps
                    heat, resulting in rising global temperatures and extreme
                    weather events. This has disastrous effects on ecosystems,
                    biodiversity, and human health.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-purple-800">
                    How Planting Trees Can Help Control Carbon Emissions
                  </h3>
                  <p className="text-base text-gray-800 mt-4">
                    Trees naturally absorb carbon dioxide from the atmosphere
                    through photosynthesis. When we plant trees, we increase the
                    Earth's ability to absorb excess CO2, helping to reduce the
                    greenhouse effect. Forests act as carbon sinks and are vital
                    in controlling global warming.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="bg-gradient-to-r from-pink-50 to-pink-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-purple-800">
                  What Are Carbon Credits?
                </h3>
                <p className="text-base text-gray-800 mt-4">
                  Carbon credits are permits that allow the holder to emit a
                  certain amount of carbon dioxide or other greenhouse gases.
                  These credits are issued by governments or organizations, and
                  they can be traded in a carbon market. The goal is to
                  incentivize the reduction of emissions by placing a price on
                  carbon pollution.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-2 border-teal-400 pb-2">
                Steps We Can Take to Control Carbon Emissions
              </h2>
              <p className="text-base text-gray-700 mb-6">
                Strategies to neutralize emissions include using electric
                vehicles (EVs), green fuels, and afforestation. Below are the
                methods and their impact.
              </p>
              <div className="space-y-8">
                {/* EV Reduction */}
                <div className="bg-gradient-to-r from-teal-50 to-teal-200 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <div className="section mb-8" id="stepsToControl">
                    <ul className="list-disc ml-5 text-gray-600">
                      <li>
                        <h3 className="text-lg font-bold text-black">
                          Reduce Energy Consumption:
                        </h3>
                        <p className="text-black">
                          At Home: Improve insulation, use energy-efficient
                          appliances, LED lighting, and smart thermostats.
                        </p>
                        <p className="text-black">
                          At Work: Implement energy-efficient lighting and
                          equipment, optimize HVAC systems, and encourage
                          mindful energy use.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-lg font-bold text-black">
                          Switch to Renewable Energy:
                        </h3>
                        <p className="text-black">
                          At Home: Consider solar panels, wind turbines, or
                          switch to renewable energy providers.
                        </p>
                        <p className="text-black">
                          At Work: Invest in renewable energy projects or
                          purchase renewable energy credits.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-lg font-bold text-black">
                          Improve Transportation Efficiency:
                        </h3>
                        <p className="text-black">
                          Personal: Walk, bike, or use public transportation for
                          shorter trips, carpool, and drive efficiently.
                        </p>
                        <p className="text-black">
                          Business: Optimize fleet vehicles, encourage
                          hybrid/electric vehicles, and reduce business travel
                          when possible.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-lg font-bold text-black">
                          Reduce Waste and Food Consumption:
                        </h3>
                        <p className="text-black">
                          At Home: Reduce food waste, compost scraps, recycle
                          effectively, and minimize plastic consumption.
                        </p>
                        <p className="text-black">
                          At Work: Implement waste reduction programs,
                          composting initiatives, and explore sustainable
                          packaging options.
                        </p>{" "}
                      </li>
                      <li>
                        <h3 className="text-lg font-bold text-black">
                          Choose Sustainable Products and Services:
                        </h3>
                        <p className="text-black">
                          At Home: Buy local and seasonal food, choose reusable
                          items, and support sustainable businesses.
                        </p>
                        <p className="text-black">
                          At Work: Partner with sustainable suppliers, implement
                          sustainable purchasing practices, and consider carbon
                          offsetting.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-lg font-bold text-black">
                          Carbon Offsetting:
                        </h3>
                        <p className="text-black">
                          At Home: Consider offsetting your remaining emissions
                          through projects like reforestation or renewable
                          energy.
                        </p>
                        <p className="text-black">
                          At Work: Implement carbon offsetting programs to
                          balance your company's footprint.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-lg font-bold text-black">
                          Promote Sustainable Practices:
                        </h3>
                        <p className="text-black">
                          At Home: Educate yourself and others on sustainable
                          living and encourage positive changes.
                        </p>
                        <p className="text-black">
                          At Work: Implement sustainability initiatives, engage
                          employees, and track your progress.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-lg font-bold text-black">
                          Support Sustainable Infrastructure:
                        </h3>
                        <p className="text-black">
                          At Home: Advocate for policies that promote
                          sustainable infrastructure, like public transportation
                          and renewable energy.
                        </p>
                        <p className="text-black">
                          At Work: Support sustainable infrastructure projects
                          and policies that benefit the environment.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-lg font-bold text-black">
                          Reduce Meat Consumption:
                        </h3>
                        <p className="text-black">
                          At Home: Eat less red meat, as it has a higher carbon
                          footprint than other protein sources.
                        </p>
                        <p className="text-black">
                          At Work: Encourage vegetarian or vegan options in
                          company meals and events.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-lg font-bold text-black">
                          Embrace Circular Economy:
                        </h3>
                        <p className="text-black">
                          At Home: Repair, reuse, and recycle items instead of
                          throwing them away.
                        </p>
                        <p className="text-black">
                          At Work: Implement circular economy strategies in your
                          supply chain, like reducing waste and promoting reuse.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* More Info Button */}
            <button
              onClick={toggleInfo}
              className=" text-xl font-semibold underline text-green-800 py-2 px-4 rounded mt-4"
            >
              Learn More About Carbon Credits
            </button>

            {/* Info Box (hidden by default) */}
            {isInfoBoxVisible && (
              <div
                id="infoBox"
                className=" p-4 bg-blue-100 border border-blue-300 rounded-lg"
              >
                <p className="text-gray-600">
                  Carbon credits are a part of a global effort to reduce
                  emissions. Companies or individuals who emit less carbon than
                  their assigned limit can sell their extra carbon credits to
                  others, creating an economic incentive to reduce emissions.
                  This system encourages cleaner production processes and helps
                  in mitigating climate change.
                </p>
                <h2 className="text-blue-600">How Do Carbon Credits Work?</h2>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>
                    Cap-and-Trade: Governments set emission limits ("caps");
                    companies trade surplus credits
                  </li>
                  <li>
                    Example: California’s program covers 85% of state emissions
                  </li>
                  <li>
                    Baseline-and-Credit: Entities exceeding targets buy credits
                    from those under-utilizing allowances (e.g., India’s new
                    Carbon Credit Trading Scheme).
                  </li>
                  <li>Plant more trees and generate more credit.</li>
                </ul>
                <h2 className="text-blue-600">
                  Credits are generated through:
                </h2>
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
                    Avoidance: Preventing future emissions (e.g., renewable
                    energy projects)
                  </li>
                </ul>
                <h2 className="text-blue-600">Types of Carbon Credits</h2>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>
                    Renewable Energy Credits (RECs): Support wind/solar power.
                  </li>
                  <li>
                    Carbon Sequestration: Reforestation or soil carbon storage.
                  </li>
                  <li>
                    Methane Capture: From coal mines, livestock, or landfills.
                  </li>
                </ul>
                <h2 className="text-blue-600">Benefits of Carbon Credits</h2>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>
                    Cost-Effective Reductions: Cheaper for companies to buy
                    credits than overhaul operations
                  </li>
                  <li>
                    Co -Benefits: Biodiversity conservation, community jobs
                    (e.g., tribal land projects in the U.S.)
                  </li>
                  <li>
                    Global Reach: Funds flow to developing countries for clean
                    energy projects
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsNew;
