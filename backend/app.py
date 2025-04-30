from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Defining standard emission factors for emission estimation
# References
''' 2006 IPCC Guidelines for National Greenhouse Gas Inventories
    Link - https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf
           https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf '''
# Emission factors for coal mining activities (in kg CO2)
EXCAVATION_FACTOR = 94.6  # kg CO2 per ton of coal mined
TRANSPORTATION_FACTOR = 74.1  # kg CO2 per ton per km (for diesel-powered transportation)
EQUIPMENT_FACTOR = 73.3  # kg CO2 per hour of equipment operation

GWP_METHANE = 25  # Global Warming Potential for Methane
COAL_CO2_EMISSION_FACTOR = 2.2  # Example value, tons CO2 per ton of coal
cost_per_cc = 42 #average cost per carbon credit is 42$ it may vary according to various conditions
emissionFactors = {
  'coal': 2.42,        # kg CO2 per kg of coal
  'oil': 3.17,         # kg CO2 per liter of oil
  'naturalGas': 2.75,  # kg CO2 per cubic meter of natural gas
  'biomass': 0         # kg CO2 per kg of biomass
}
@app.route('/calculate', methods=['POST'])
def calculate_emissions():
    data = request.json
    
    # Inputs
    excavation = float(data['excavation'])
    transportation = float(data['transportation'])
    fuel = float(data['fuel'])
    equipment = float(data['equipment'])
    workers = int(data['workers'])
    output = float(data['output'])
    fueltype = data.get('fuelType', 'coal')
    reduced = float(data['reduction'])

    # Emission calculations
    excavation_emissions = excavation * EXCAVATION_FACTOR
    transportation_emissions = transportation * TRANSPORTATION_FACTOR * 0.5
    equipment_emissions = equipment * EQUIPMENT_FACTOR

    total_emissions = excavation_emissions + transportation_emissions + equipment_emissions
    # Individual per capita emissions
    excavation_per_capita = excavation_emissions / workers
    transportation_per_capita = transportation_emissions / workers
    equipment_per_capita = equipment_emissions / workers

    # Individual per output emissions
    excavation_per_output = excavation_emissions / output
    transportation_per_output = transportation_emissions / output
    equipment_per_output = equipment_emissions / output

    # calculated carbon credits
    annualcoal = output
    fuel_emission_factor = emissionFactors.get(fueltype, COAL_CO2_EMISSION_FACTOR)
    fuel_emissions = fuel * fuel_emission_factor
    total =  annualcoal * COAL_CO2_EMISSION_FACTOR + fuel_emissions 
    baselineemissions = total
    carboncredits = baselineemissions - reduced
    worth = carboncredits * cost_per_cc
    return jsonify({
        'totalEmissions': total_emissions,
        'excavationEmissions': excavation_emissions,
        'transportationEmissions': transportation_emissions,
        'equipmentEmissions': equipment_emissions,
        'excavationPerCapita': excavation_per_capita,
        'transportationPerCapita': transportation_per_capita,
        'equipmentPerCapita': equipment_per_capita,
        'excavationPerOutput': excavation_per_output,
        'transportationPerOutput': transportation_per_output,
        'equipmentPerOutput': equipment_per_output,
        'perCapitaEmissions': total_emissions / workers,
        'perOutputEmissions': total_emissions / output,
        'baseline': baselineemissions,
        'carboncredits': carboncredits,
        'reduced': reduced,
        'worth': worth,
        'total': total
    })



# Defining standard constants for exploring Carbon Footprint Neutralization Pathways
# Reference:
'''-----Carbon Footprint Reduction from EVs: EVs typically reduce carbon emissions by 20%-30% compared to conventional vehicles (IEA, "Global EV Outlook," 2023).
Link: https://www.iea.org/reports/global-ev-outlook-2023-----'''
'''-----Carbon Footprint Reduction from Cleaner Fuels: Switching from coal to natural gas can reduce carbon emissions by about 50% (EPA, "Greenhouse Gas Emissions from a Typical Passenger Vehicle," 2023).
Link: https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle-----'''
'''-----Afforestation Sequestration Rate: Afforestation sequesters approximately 2.2 tons of carbon per hectare per year (IPCC, "Special Report on Climate Change and Land," 2019).
Link: https://www.ipcc.ch/srccl/-----'''
'''-----Renewable Energy Reduction: Renewable energy can reduce electricity consumption and carbon emissions by up to 30% (IRENA, "Renewable Energy and Jobs – Annual Review," 2022).
Link: https://www.irena.org/publications/2022/Dec/Renewable-Energy-and-Jobs-Annual-Review-2022-----'''

EV_CONSTANT = 0.20
GREEN_FUEL_CONSTANT = 0.50
SEQUESTRATION_RATE = 2.2
ELECTRICITY_REDUCTION_RATE = 0.3 

@app.route('/neutralise', methods=['POST'])
def calculate_neutralisation_pathways():
    data = request.json
    emissions = float(data['emissions'])
    transportation = float(data['transportation'])
    fuel = float(data['fuel'])
    
    # Get the user-specified percentages
    green_fuel_percentage = float(data['green_fuel_percentage']) / 100
    neutralise_percentage = float(data['neutralise_percentage']) / 100
    ev_transportation_percentage = float(data['ev_transportation_percentage']) / 100

    #Calculate Emissions to be neutralised
    emissions_to_be_neutralised = emissions*neutralise_percentage

    # Calculate reductions based on the user input percentages
    transportation_reduction = transportation * EV_CONSTANT * ev_transportation_percentage
    fuel_reduction = fuel * GREEN_FUEL_CONSTANT * green_fuel_percentage
    
    # Calculate the remaining emissions after applying reductions
    remaining_emissions = emissions_to_be_neutralised - (transportation_reduction + fuel_reduction)
    
    # Calculate the required land for afforestation and electricity savings
    land_required = remaining_emissions / SEQUESTRATION_RATE
    electricity_consumption = emissions_to_be_neutralised * ELECTRICITY_REDUCTION_RATE
    
    overall_remaining_emissions = emissions - emissions_to_be_neutralised
 
    result = {
        'emissions': emissions,
        'emissions_to_be_neutralised': emissions_to_be_neutralised,
        'transportation_footprint_reduction': transportation_reduction,
        'fuel_footprint_reduction': fuel_reduction,
        'remaining_footprint_after_reduction': remaining_emissions,
        'land_required_for_afforestation_hectares': land_required,
        'estimated_electricity_savings_mwh': electricity_consumption,
        'overall_remaining_footprint': overall_remaining_emissions,
        'message': 'Carbon footprint neutralization pathways calculated successfully.'
    }
    
    return jsonify(result)


if __name__ == '__main__':
    app.run('0.0.0.0', 5000)