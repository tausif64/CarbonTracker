import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, Title, LinearScale, CategoryScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(LinearScale, CategoryScale, BarElement, Tooltip, Legend, Title, ChartDataLabels);

const NeutralizationChart = ({ data }) => {
    const createChartData = (labels, values, backgroundColors) => ({
        labels: labels,
        datasets: [
            {
                label: 'C02 Reduction(kg CO2)',
                data: values,
                backgroundColor: backgroundColors,
                hoverBackgroundColor: backgroundColors,
            },
        ],
    });
    const neutralizationData = createChartData(
        ['EV Transportation', 'Green Fuel', 'Remaining Emissions', 'Afforestation(Land)'],
        [data.transportation_footprint_reduction,
        data.fuel_footprint_reduction,
        data.remaining_footprint_after_reduction,
        data.land_required_for_afforestation_hectares,
        data.estimated_electricity_savings_mwh
        ],
        ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0', '#9966FF']
    );
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
                            label += ': ' + Number(context.parsed).toFixed(2) + ' kg CO2';
                        }
                        return label;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'CO2 Reduction (kg CO2)',
                },
            },
        },
    };
    return (
        <div className="charts-container">
            <div className="chart">
                <h3 className="text-xl font-semibold mb-4">Carbon Neutralization Pathways</h3>
                <Bar data={neutralizationData} options={options} width={150} height={150} />
            </div>
        </div>
    );
};
export default NeutralizationChart;