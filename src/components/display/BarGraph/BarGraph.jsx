import React, { useEffect, useState } from "react";
import "./BarGraph.css";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);

const BarGraph = ({ data, yLabel }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (data) {
      const labels = Object.keys(data);
      const values = Object.values(data);
      const backgroundColor = [];
      const borderColor = [];
      const hoverBackgroundColor = [];

      const min = Math.min(...values);
      const max = Math.max(...values);

      values.forEach((value, index) => {
        if (index === activeIndex) {
          backgroundColor.push("#FFAA00");
          borderColor.push("#FFAA00");
          hoverBackgroundColor.push("#FFAA00");
        } else if (value === min) {
          backgroundColor.push("#1A8738");
          borderColor.push("#1A8738");
          hoverBackgroundColor.push("#FFAA00");
        } else if (value === max) {
          backgroundColor.push("#D91604");
          borderColor.push("#D91604");
          hoverBackgroundColor.push("#FFAA00");
        } else {
          backgroundColor.push("#FF8731");
          borderColor.push("#FF8731");
          hoverBackgroundColor.push("#FFAA00");
        }
      });

      setChartData({
        labels,
        datasets: [
          {
            label: "",
            data: values,
            backgroundColor,
            borderColor,
            hoverBackgroundColor,
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data, activeIndex]);

  return (
    <div className="bar-graph-container">
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              ticks: {
                color: "#512314",
              },
              grid: {
                color: "#512314",
                borderColor: "#512314",
              },
              title: {
                display: true,
                text: yLabel,
                color: "#512314",
                font: {
                  family: "Roboto Slab, serif",
                  size: 20,
                },
              },
            },
            x: {
              ticks: {
                color: "#512314",
              },
              grid: {
                color: "#512314",
              },
            },
          },
          onClick: (event, elements) => {
            if (elements.length > 0) {
              const selectedIndex = elements[0].index;
              setActiveIndex(selectedIndex);
            }
          },
        }}
      />
      {activeIndex !== null && (
        <div className="selected-bar-info">
          <span style={{ fontFamily: "Roboto Slab, serif" }}>
            {chartData.labels[activeIndex]}:
          </span>
          <span style={{ fontFamily: "Teachers, sans-serif" }}>
            {chartData.datasets[0].data[activeIndex]}
          </span>
        </div>
      )}
    </div>
  );
};

export default BarGraph;
