import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const EmploymentStatusChart = () => {
    // Data dummy untuk status pekerjaan lulusan
    const data = {
        labels: ["Bekerja", "Mencari Pekerjaan", "Melanjutkan Studi"],
        datasets: [
            {
                label: "Status Pekerjaan Lulusan",
                data: [65, 20, 15], // Persentase lulusan di masing-masing kategori
                backgroundColor: [
                    "rgba(75, 192, 192, 0.6)", // Bekerja
                    "rgba(255, 99, 132, 0.6)", // Mencari Pekerjaan
                    "rgba(54, 162, 235, 0.6)", // Melanjutkan Studi
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                ],
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
                text: "Persentase Lulusan yang Sudah Bekerja",
            },
        },
    };

    return <Pie data={data} options={options} />;
};

export default EmploymentStatusChart;
