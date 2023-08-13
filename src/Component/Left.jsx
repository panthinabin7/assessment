import { useState } from "react";
import {
  AddCircle,
  ToggleOff,
  FiberManualRecord,
  NearMeOutlined,
  AcUnitOutlined,
  WbSunnyOutlined,
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import classes from "./Left.module.scss";
import image from "../assets/building.png";

const Left = () => {
  const [temperatureUnit, setTemperatureUnit] = useState("Celsius");

  return (
    <div className={classes.left}>
      <div className={classes["left-container"]}>
        <div className={classes["detail-container"]}>
          <div className={classes["top-left"]}>
            <AddCircle />
            <div className={classes["dot-container"]}>
              <div className={classes.dot} />
              <FiberManualRecord />
              <FiberManualRecord />
            </div>
            <p>
              <span>{temperatureUnit === "Celsius" ? "°C" : "°F"}</span>
              <ToggleOff onClick={() => setTemperatureUnit("Fahrenheit")} />
              <span>{temperatureUnit === "Celsius" ? "°F" : "°C"}</span>
            </p>
          </div>
          <div className={classes.city}>
            <div className={classes.cityInfo}>
              <div>
                <NearMeOutlined />
                <p>New York, USA</p>
              </div>
              <div>
                <AcUnitOutlined />
                <p>07:19</p>
              </div>
            </div>
            <div className={classes.dateInfo}>
              <p>Today, 28 Sept</p>
              <div>
                <AcUnitOutlined />
                <p>19:32</p>
              </div>
            </div>
          </div>
          <div className={classes.detail}>
            <div className={classes.arrow}>
              <ArrowBackIosNewOutlined />
              <p className={classes.p}>27°</p>
              <ArrowForwardIosOutlined />
            </div>
            <div className={classes.dayInfo}>
              <WbSunnyOutlined />
              <p>Sunny</p>
            </div>
          </div>
        </div>
        <div className={classes["image-container"]}>
          <img
            src={image}
            alt=""
            className={classes["left-image"]}
            width={470}
          />
        </div>
      </div>
    </div>
  );
};

export default Left;

// import classes from "./Left.module.scss";
// import image from "../assets/building.png";

// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import ToggleOffIcon from "@mui/icons-material/ToggleOff";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
// import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
// import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

// const Left = () => {
//   return (
//     <div className={classes.left}>
//       {/* imagepart */}
//       <div className={classes["left-container"]}>
//         {/* details */}
//         <div className={classes["detail-container"]}>
//           <div className={classes["top-left"]}>
//             <AddCircleIcon />
//             <div className={classes["dot-container"]}>
//               <div />
//               <FiberManualRecordIcon />
//               <FiberManualRecordIcon />
//             </div>

//             <p>
//               <span>°C</span>

//               <ToggleOffIcon />
//               <span>°F</span>
//             </p>
//           </div>

//           <div className={classes.city}>
//             <div className={classes.cityInfo}>
//               <div>
//                 <NearMeOutlinedIcon />
//                 <p>New York, USA</p>
//               </div>
//               <div>
//                 <AcUnitOutlinedIcon />
//                 <p>07:19</p>
//               </div>
//             </div>
//             <div className={classes.dateInfo}>
//               <p>Today, 28 Sept</p>

//               <div>
//                 <AcUnitOutlinedIcon />
//                 <p>19:32</p>
//               </div>
//             </div>
//           </div>

//           <div className={classes.detail}>
//             <div className={classes.arrow}>
//               <ArrowBackIosNewOutlinedIcon />
//               <p className={classes.p}>27°</p>
//               <ArrowForwardIosOutlinedIcon />
//             </div>
//             <div className={classes.dayInfo}>
//               <WbSunnyOutlinedIcon />
//               <p>Sunny</p>
//             </div>
//           </div>
//         </div>
//         <div className={classes["image-container"]}>
//           <img
//             src={image}
//             alt=""
//             className={classes["left-image"]}
//             width={400}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Left;
