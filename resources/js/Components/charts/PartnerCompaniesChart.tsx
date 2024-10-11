import React from "react";
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

// Register components for Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const PartnerCompaniesChart = () => {
    // Data dummy untuk jumlah perusahaan yang bermitra per tahun
    const data = {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [
            {
                label: "Jumlah Perusahaan yang Bermitra",
                data: [10, 15, 25, 30], // Jumlah perusahaan mitra per tahun
                backgroundColor: "rgba(54, 162, 235, 0.6)", // Warna bar chart
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Pertumbuhan Jumlah Perusahaan Mitra (2020-2023)",
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default PartnerCompaniesChart;
