import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const JobSectorChart = () => {
    // Data dummy untuk sektor pekerjaan lulusan
    const data = {
        labels: [
            "Akuntansi",
            "Bisnis Daring dan Pemasaran",
            "Multimedia",
            "Otomatisasi dan Tata Kelola Perkantoran",
            "Perhotelan",
            "Perbankan dan Keuangan Mikro",
            "Teknik Komputer Jaringan",
            "Tata Busana",
            "Tata Boga",
        ],
        datasets: [
            {
                label: "Lulusan Berdasarkan Jurusan",
                data: [40, 35, 15, 47, 30, 37, 10, 14, 14], // Persentase lulusan di masing-masing sektor
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)", // Color 1
                    "rgba(255, 159, 64, 0.6)", // Color 2
                    "rgba(75, 192, 192, 0.6)", // Color 3
                    "rgba(54, 162, 235, 0.6)", // Color 4
                    "rgba(153, 102, 255, 0.6)", // Color 5
                    "rgba(201, 203, 207, 0.6)", // Color 6
                    "rgba(100, 149, 237, 0.6)", // Color 7
                    "rgba(205, 220, 57, 0.6)", // Color 8
                    "rgba(240, 84, 119, 0.6)", // Color 9
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)", // Color 1
                    "rgba(255, 159, 64, 1)", // Color 2
                    "rgba(153, 102, 255, 1)", // Color 3
                    "rgba(255, 205, 86, 1)", // Color 4
                    "rgba(54, 162, 235, 1)", // Color 5
                    "rgba(201, 203, 207, 1)", // Color 6
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
                text: "Lulusan yang Bekerja Berdasarkan Jurusan",
            },
            legend: {
                position: "bottom" as const,
            },
        },
    };

    return <Pie data={data} options={options} />;
};

export default JobSectorChart;
