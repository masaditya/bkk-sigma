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

// Registrasi komponen Chart.js yang dibutuhkan
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const GraduateChart = () => {
    // Data dummy lulusan per angkatan
    const data = {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [
            {
                label: "Total Lulusan",
                data: [350, 400, 420, 450], // Total lulusan per angkatan
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
            {
                label: "Lulusan yang Bekerja",
                data: [280, 350, 380, 400], // Lulusan yang bekerja
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
            {
                label: "Wirausaha",
                data: [50, 60, 65, 80], // Lulusan yang berwirausaha
                backgroundColor: "rgba(255, 206, 86, 0.6)",
                borderColor: "rgba(255, 206, 86, 1)",
                borderWidth: 1,
            },
            {
                label: "Melanjutkan Pendidikan",
                data: [70, 75, 80, 90], // Lulusan yang berwirausaha
                backgroundColor: "rgba(153, 102, 255, 0.6)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Statistik Lulusan Tiap Angkatan",
                font: {
                    size: 18,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};
