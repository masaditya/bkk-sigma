import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const EmploymentStatusChart = () => {
    // Data dummy untuk status pekerjaan lulusan
    const data = {
        labels: [
            "Bekerja",
            "Melanjutkan Pendidikan",
            "Berwirausaha",
            "Lain-lain",
        ],
        datasets: [
            {
                label: "Jumlah Lulusan 2024",
                data: [242, 136, 72, 73], // Persentase lulusan di masing-masing kategori
                backgroundColor: [
                    "rgba(255, 159, 64, 0.6)", // Color 1
                    "rgba(75, 192, 192, 0.6)", // Color 2
                    "rgba(204, 0, 0, 0.6)", // Color 3
                    "rgba(100, 149, 237, 0.6)", // Color 4
                ],
                borderColor: [
                    "rgba(255, 159, 64, 1)", // Color 1
                    "rgba(75, 192, 192, 1)", // Color 2
                    "rgba(204, 0, 0, 1)", // Color 3
                    "rgba(100, 149, 237, 1)", // Color 4
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
