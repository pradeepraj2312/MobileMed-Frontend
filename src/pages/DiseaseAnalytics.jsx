import React from "react";
import AdminSidebar from "../components/adminSidebar";
import { Doughnut } from "react-chartjs-2";
import { Download, Filter } from "lucide-react";
import "../App.css";

// Register Chart.js modules
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = [
  { name: "Influenza", value: 1200, color: "#2ecc71" },
  { name: "Diabetes", value: 850, color: "#f1c40f" },
  { name: "Hypertension", value: 720, color: "#e74c3c" },
  { name: "Asthma", value: 550, color: "#5dade2" },
  { name: "Arthritis", value: 480, color: "#9b59b6" },
  { name: "COVID-19", value: 320, color: "#e67e22" },
  { name: "Migraine", value: 210, color: "#a569bd" },
];

const totalCases = data.reduce((acc, d) => acc + d.value, 0);

function DiseaseAnalytics() {
  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        data: data.map((d) => d.value),
        backgroundColor: data.map((d) => d.color),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
    },
    cutout: "70%", // donut hole
    maintainAspectRatio: false,
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="main-content">
        <div className="disease-analytics">
          <h2>Disease Count Analytics</h2>

          {/* Top Buttons */}
          <div className="analytics-actions">
            <button>
              <Download size={16} /> Export Data
            </button>
            <button>
              <Filter size={16} /> Filter by Village
            </button>
          </div>

          <div className="analytics-card">
            {/* Donut Chart */}
            <div className="chart-container">
              <h3>Disease Distribution</h3>
              <div className="chart-wrapper">
                <Doughnut data={chartData} options={chartOptions} />
                <div className="donut-center">
                  <p>{totalCases.toLocaleString()}</p>
                  <p>Total Cases</p>
                </div>
              </div>
            </div>

            {/* Breakdown List */}
            <div>
              <h3>Breakdown by Disease</h3>
              <ul className="breakdown-list">
                {data.map((d, i) => {
                  const percentage = ((d.value / totalCases) * 100).toFixed(1);
                  return (
                    <li key={i}>
                      <span>
                        <span
                          className="color-dot"
                          style={{ backgroundColor: d.color }}
                        ></span>
                        {d.name}
                      </span>
                      <span>
                        {d.value.toLocaleString()} ({percentage}%)
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiseaseAnalytics;
