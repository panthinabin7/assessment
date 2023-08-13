import { useState } from "react";
import LineChart from "../Charts/LineChart";
import classes from "./UpcommingHours.module.scss";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../Utils/Data";

Chart.register(CategoryScale);

const UpcommingHours = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.time),
        backgroundColor: [
          "rgba(75,192,192,1)",

          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <p>Upcomming Hours</p>
        <div className={classes.options}>
          <select name="" id="">
            <option value="">Rain precipitation</option>
            <option value="">Humidity</option>
            <option value="">Rain drops</option>
            <option value="">Rain precipitation</option>
          </select>
          <button className={classes.button}>Next days</button>
        </div>
      </div>
      <div className={classes.chartContainer}>
        <div className={classes["data-container"]}>
          {chartData.labels.map((temp) => (
            <div className={classes.data} key={temp.id}>
              <p>{temp.time}</p>
              <WbSunnyOutlinedIcon />
              <p>{temp.temperature}°</p>
            </div>
          ))}
        </div>
        <LineChart chartData={chartData} />
        <div className={classes["degree-container"]}>
          {chartData.labels.map((prob) => (
            <div className={classes.degree} key={prob.id}>
              <p>{prob.probability}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcommingHours;
