// DoughnutChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register required components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const DoughnutChart = ({ data }) => {
  const createChartData = (labels,values,backgroundColors) =>({
    labels: labels,
    datasets: [
      {
        data:values,
        backgroundColor:backgroundColors,
        hoverBackgroundColor: backgroundColors,
      },
    ],
  });

  const totalEmissionsData = createChartData(
    ['Excavation', 'Transportation', 'Equipment'],
    [data.excavationEmissions, data.transportationEmissions, data.equipmentEmissions],
    ['#FF6384', '#36A2EB', '#FFCE56']
  );

  // const perCapitaEmissionsData = createChartData(
  //   ['Excavation', 'Transportation', 'Equipment'],
  //   [data.excavationPerCapita, data.transportationPerCapita, data.equipmentPerCapita],
  //   ['#FF0000', '#FFFF00', '#0000FF']
  // );

  // const perOutputEmissionsData = createChartData(
  //   ['Excavation', 'Transportation', 'Equipment'],
  //   [data.excavationPerOutput, data.transportationPerOutput, data.equipmentPerOutput],
  //  ['#008000', '#800080', '#FFA500']
  // );

  const totalEmissions=createChartData(
    ['Excavation', 'Transportation', 'Equipment'],
    [data.totalEmissions,data.perCapitaEmissions,data.perOutputEmissions],
       ['#008000', '#800080', '#FFA500']
 
  )


  const options = {
    plugins: {
      datalabels: {
        color: '#fff',
        display: true,
        formatter: (value) => `${Number(value).toFixed(2)} kg CO2`,
        font: {
          weight: 'bold',
        },
        anchor: 'end',
        align: 'start',
      },
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.label || '';
            if (context.parsed !== null) {
              label += ': ' + Number(context.parsed).toFixed(2);
            }
            return label;
          },
        },
      },
    },
  };

  return (
        <div className="charts-container">
      <div className="chart">
        <h3 className="text-xl font-semibold mb-4">Total Emissions Breakdown</h3>
        <Pie data={totalEmissionsData} options={options} width={150} height={150} />
      </div>

      {/* <div className="chart">
        <h3 className="text-xl font-semibold mb-4">Per Capita Emissions Breakdown</h3>
        <Pie data={perCapitaEmissionsData} options={options} width={150} height={150} />
      </div>

      <div className="chart">
        <h3 className="text-xl font-semibold mb-4">Per Output Emissions Breakdown</h3>
        <Pie data={perOutputEmissionsData} options={options} width={150} height={150} />
      </div> */}
    </div>
  );
};

export default DoughnutChart;
