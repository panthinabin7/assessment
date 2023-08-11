import { Line } from "react-chartjs-2";
import classes from "./LineChart.module.scss";

const LineChart = () => {
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Increment/Decrement",
        data: [23, 29, 58, 75, 33, 20, 73, 49],
        backgroundColor: "rgba(103, 103, 248, 0.899)",
        fill: true,
        tenson: 0.8,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true, // Allow chart to be responsive
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "top",
        grid: {
          color: (context) => (context ? "black" : "rgba(0, 0, 0, 0.1)"), // Color vertical lines black'
        },
        ticks: {
          display: false, // Hide default day labels
        },
        label: data,
      },
      y: {
        beginAtZero: false,
        display: false,
        max: 120,
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={classes.chartContainer}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
