import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const JobSectorChart = () => {
    // Data dummy untuk sektor pekerjaan lulusan
    const data = {
        labels: [
            "Teknologi",
            "Keuangan",
            "Manufaktur",
            "Pendidikan",
            "Kesehatan",
            "Lainnya",
        ],
        datasets: [
            {
                label: "Lulusan Berdasarkan Sektor",
                data: [35, 20, 15, 10, 8, 12], // Persentase lulusan di masing-masing sektor
                backgroundColor: [
                    "rgba(75, 192, 192, 0.6)", // Teknologi
                    "rgba(255, 159, 64, 0.6)", // Keuangan
                    "rgba(153, 102, 255, 0.6)", // Manufaktur
                    "rgba(255, 205, 86, 0.6)", // Pendidikan
                    "rgba(54, 162, 235, 0.6)", // Kesehatan
                    "rgba(201, 203, 207, 0.6)", // Lainnya
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 205, 86, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(201, 203, 207, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Lulusan yang Bekerja Berdasarkan Sektor",
            },
        },
    };

    return <Pie data={data} options={options} />;
};

export default JobSectorChart;
