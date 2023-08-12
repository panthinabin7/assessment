import { LinearProgress } from "@mui/material";
import Card from "../UI/Card";
import classes from "./MoreDetails.module.scss";
import CustomizedProgressBars from "../UI/LinearBar";

const testData = { bgcolor: "#6a1b9a", completed: 65 };

const presentation = function (data) {
  if (data > 33) {
    return (testData.completed - 33) * 3;
  } else if (data < 33 && data > 0) {
    return 0;
  }
};

const percentage = {
  first:
    testData.completed +
    Number(
      testData.completed > 33
        ? `${100 - testData.completed}`
        : `${testData.completed * 2}`
    ),
  second: presentation(testData.completed),
  third:
    testData.completed +
    Number(
      testData.completed > 66
        ? `${testData.completed - 66}`
        : `${0 - testData.completed}`
    ),
};
console.log(percentage.first);

const MoreDetails = () => {
  return (
    <div className={classes["card-container"]}>
      <Card>
        <div className={classes.title}>
          <p>Humidity</p>
          <h3>{testData.completed} %</h3>
          <div className={classes.progressBar}>
            <CustomizedProgressBars value={percentage.first} />
            <CustomizedProgressBars value={percentage.second} />
            <CustomizedProgressBars value={percentage.third} />
          </div>
        </div>
      </Card>
      <Card>
        <div className={classes.title}>
          <p>Wind</p>
        </div>
      </Card>
      <Card>
        <div className={classes.title}>
          <p>Percipitation</p>
        </div>
      </Card>
      <Card>
        <div className={classes.title}>
          <p>UV index</p>
        </div>
      </Card>
      <Card>
        <div className={classes.title}>
          <p>Feels Like</p>
        </div>
      </Card>
      <Card>
        <div className={classes.title}>
          <p>Chance of rain</p>
        </div>
      </Card>
    </div>
  );
};

export default MoreDetails;
