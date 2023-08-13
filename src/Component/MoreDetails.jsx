import Card from "../UI/Card";
import classes from "./MoreDetails.module.scss";

import CustomizedProgressBars from "../UI/LinearBar";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";

import { SpeedoMeter } from "./SpeedoMeter";

const humidityTestData = { bgcolor: "#6a1b9a", humidity: 50 };

const presentation = function (data) {
  if (data >= 33 && data < 66) {
    return (humidityTestData.humidity - 33) * 3;
  } else if (data >= 66) {
    return 100;
  } else if (data < 33 && data > 0) {
    return 0;
  }
};

const presentation2 = function (data) {
  if (data >= 66 && data < 100) {
    return (humidityTestData.humidity - 66) * 2.9;
  } else if (data < 66 && data > 0) {
    return 0;
  }
};

const percentage = {
  first:
    humidityTestData.humidity +
    Number(
      humidityTestData.humidity > 33
        ? `${100 - humidityTestData.humidity}`
        : `${humidityTestData.humidity * 2}`
    ),
  second: presentation(humidityTestData.humidity),
  third: presentation2(humidityTestData.humidity),
  // humidityTestData.humidity +
  // Number(
  //   humidityTestData.humidity > 66
  //     ? `${humidityTestData.humidity - 66}`
  //     : `${0 - humidityTestData.humidity}`
  // ),
};

const MoreDetails = () => {
  return (
    <div className={classes["card-container"]}>
      {/* Humidity */}
      <Card>
        <div className={classes["title-container"]}>
          <div className={classes.title}>
            <p>Humidity</p>
            <SevereColdIcon />
          </div>
          <div className={classes.mid}>
            <h3>{humidityTestData.humidity} %</h3>
            <div className={classes.progressBar}>
              <div className={classes["progress-container"]}>
                <p>good</p>
                <CustomizedProgressBars
                  value={percentage?.first || 0}
                  width={60}
                />
              </div>
              <div className={classes["progress-container"]}>
                <p>normal</p>
                <CustomizedProgressBars
                  value={percentage?.second || 0}
                  width={60}
                />
              </div>
              <div className={classes["progress-container"]}>
                <p>bad</p>
                <CustomizedProgressBars
                  value={percentage?.third || 0}
                  width={60}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* Wind */}
      <Card>
        <div className={classes["wind-container"]}>
          <div className={classes.title}>
            <p>Wind</p>
            <AirOutlinedIcon />
          </div>

          <div className={classes.speedoMeter}>
            <SpeedoMeter />
          </div>

          <p>Wind</p>
        </div>
      </Card>
      {/* Percipitation */}
      <Card>
        <div className={classes["title-container"]}>
          <div className={classes.title}>
            <p>Perciptation</p>
            <ThunderstormIcon />
          </div>
          <div className={classes.mid}>
            <h3>{humidityTestData.humidity} mm</h3>
            <div className={classes.progressBar}>
              <div className={classes["progress-container"]}>
                <p>0</p>
                <CustomizedProgressBars
                  value={percentage?.first || 0}
                  width={60}
                />
              </div>
              <div className={classes["progress-container"]}>
                <p>50</p>
                <CustomizedProgressBars
                  value={percentage?.second || 0}
                  width={60}
                />
              </div>
              <div className={classes["progress-container"]}>
                <p>100</p>
                <CustomizedProgressBars
                  value={percentage?.third || 0}
                  width={60}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* UV index */}
      <Card>
        <div className={classes["title-container"]}>
          <div className={classes.title}>
            <p>UV index</p>
            <WbSunnyOutlinedIcon />
          </div>
          <div className={classes.mid}>
            <h3>{humidityTestData.humidity} medium</h3>
            <div className={classes.progressBar}>
              <div className={classes["progress-container"]}>
                <p>0</p>
                <CustomizedProgressBars
                  value={percentage?.first || 0}
                  width={60}
                />
              </div>
              <div className={classes["progress-container"]}>
                <p>5</p>
                <CustomizedProgressBars
                  value={percentage?.second || 0}
                  width={60}
                />
              </div>
              <div className={classes["progress-container"]}>
                <p>10+</p>
                <CustomizedProgressBars
                  value={percentage?.third || 0}
                  width={60}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* feels like */}
      <Card>
        <div className={classes["title-container"]}>
          <div className={classes.title}>
            <p>Feels Like</p>
            <ThermostatOutlinedIcon />
          </div>
          <div className={classes.mid}>
            <h3>{humidityTestData.humidity}°</h3>
            <div className={classes.progressBar}>
              <div className={classes["progress-container"]}>
                <div className={classes["paragraph-container"]}>
                  <p>0°</p>
                  <p>50°</p>
                  <p>100°</p>
                </div>
                <CustomizedProgressBars
                  width={200}
                  value={humidityTestData.humidity}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* chance of rain */}
      <Card>
        <div className={classes["title-container"]}>
          <div className={classes.title}>
            <p>Chance of Rain</p>
            <WaterDropOutlinedIcon />
          </div>
          <div className={classes.mid}>
            <h3>{humidityTestData.humidity}%</h3>
            <div className={classes.progressBar}>
              <div className={classes["progress-container"]}>
                <div className={classes["paragraph-container"]}>
                  <p>0%</p>
                  <p>25%</p>
                  <p>50%</p>
                  <p>75%</p>
                  <p>100%</p>
                </div>
                <CustomizedProgressBars
                  width={200}
                  value={humidityTestData.humidity}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
    // <TryCard data={detailData} />
  );
};

export default MoreDetails;
