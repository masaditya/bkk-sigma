import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const FurtherEducationEntrepreneurshipChart = () => {
    // Data dummy untuk lulusan yang melanjutkan pendidikan atau berwirausaha
    const data = {
        labels: ["Melanjutkan Pendidikan", "Berwirausaha"],
        datasets: [
            {
                label: "Lulusan Melanjutkan Pendidikan vs Berwirausaha",
                data: [60, 40], // Persentase lulusan yang melanjutkan pendidikan vs berwirausaha
                backgroundColor: [
                    "rgba(75, 192, 192, 0.6)", // Melanjutkan Pendidikan
                    "rgba(255, 206, 86, 0.6)", // Berwirausaha
                ],
                borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 206, 86, 1)"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Lulusan yang Melanjutkan Pendidikan atau Berwirausaha",
            },
        },
    };

    return <Pie data={data} options={options} />;
};

export default FurtherEducationEntrepreneurshipChart;
