import classes from "./Weather.module.scss";
import image from "../assets/building.png";
import Right from "./Right";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Weather = () => {
  return (
    <div className={classes.container}>
      {/* left part */}
      <div className={classes.left}>
        {/* imagepart */}
        <div className={classes["left-container"]}>
          {/* details */}
          <div className={classes["detail-container"]}>
            <div className={classes["top-left"]}>
              <AddCircleIcon />
              <div className={classes["dot-container"]}>
                <div />
                <FiberManualRecordIcon />
                <FiberManualRecordIcon />
              </div>

              <p>
                <span>°C</span>

                <ToggleOffIcon />
                <span>°F</span>
              </p>
            </div>

            <div className={classes.city}>
              <div className={classes.cityInfo}>
                <div>
                  <NearMeOutlinedIcon />
                  <p>New York, USA</p>
                </div>
                <div>
                  <AcUnitOutlinedIcon />
                  <p>07:19</p>
                </div>
              </div>
              <div className={classes.dateInfo}>
                <p>Today, 28 Sept</p>

                <div>
                  <AcUnitOutlinedIcon />
                  <p>19:32</p>
                </div>
              </div>
            </div>

            <div className={classes.detail}>
              <div className={classes.arrow}>
                <ArrowBackIosNewOutlinedIcon />
                <p className={classes.p}>27°</p>
                <ArrowForwardIosOutlinedIcon />
              </div>
              <div className={classes.dayInfo}>
                <WbSunnyOutlinedIcon />
                <p>Sunny</p>
              </div>
            </div>
          </div>
          <div className={classes["image-container"]}>
            <img
              src={image}
              alt=""
              className={classes["left-image"]}
              width={400}
            />
          </div>
        </div>
      </div>
      <Right />
    </div>
  );
};

export default Weather;
