// import classes from "./TryCard.module.scss";
// import PropTypes from "prop-types";

// import CustomizedProgressBars from "../UI/LinearBar";

// import { SpeedoMeter } from "../Component/SpeedoMeter";
// import { detailData } from "../Utils/Data";

// const humidityTestData = {
//   bgcolor: "#6a1b9a",
//   humidity: detailData.filter((data) => {
//     let value;
//     switch (data.title) {
//       case "Humidity":
//         value = data.value;
//         break;
//       case "Wind":
//         value = data.value;
//         break;
//       case "Percipitation":
//         value = data.value;
//         break;
//       case "UV index":
//         value = data.value;
//         break;
//       case "Feels Like":
//         value = data.value;
//         break;
//       case "Chance of Rain":
//         value = data.value;
//         break;
//     }
//     return value;
//   }),
// };

// const presentation = function (data) {
//   if (data >= 33 && data < 66) {
//     return (humidityTestData.humidity - 33) * 3;
//   } else if (data >= 66) {
//     return 100;
//   } else if (data < 33 && data > 0) {
//     return 0;
//   }
// };

// const presentation2 = function (data) {
//   if (data >= 66 && data < 100) {
//     return (humidityTestData.humidity - 66) * 2.9;
//   } else if (data < 66 && data > 0) {
//     return 0;
//   }
// };

// const percentage = {
//   first:
//     humidityTestData.humidity +
//     Number(
//       humidityTestData.humidity > 33
//         ? `${100 - humidityTestData.humidity}`
//         : `${humidityTestData.humidity * 2}`
//     ),
//   second: presentation(humidityTestData.humidity),
//   third: presentation2(humidityTestData.humidity),
// };

// const TryCard = (props) => {
//   return (
//     <div className={classes["card-container"]}>
//       {props.data.map((data, i) => {
//         console.log(props.data[i]);
//         return (
//           <div key={data.id} className={classes.card}>
//             <div className={classes["title-container"]} key={data.id}>
//               {props.data[i].title === "Wind" && (
//                 <div className={classes["wind-container"]}>
//                   <div className={classes.title}>
//                     <p>Wind</p>
//                     {data.svg && <data.svg />}
//                   </div>
//                   <div className={classes.speedoMeter}>
//                     <SpeedoMeter />
//                   </div>
//                 </div>
//               )}
//               <div className={classes.title}>
//                 <p>{data.title}</p> {/*title */}
//                 {data.svg && <data.svg />}
//               </div>
//               <div className={classes.mid}>
//                 <h3>
//                   {data.value}
//                   {data.unit}
//                 </h3>
//                 <div className={classes.progressBar}>
//                   {(props.data[i].title === "Humidity" ||
//                     props.data[i].title === "Percipitation" ||
//                     props.data[i].title === "UV index") &&
//                     props.data[i].label.map((label, i) => {
//                       if(i===0){
//                         value =humidityTestData.humidity +
//                                   Number(
//                                     humidityTestData.humidity > 33
//                                       ? `${100 - humidityTestData.humidity}`
//                                       : `${humidityTestData.humidity * 2}`
//                                   )
//                       }
//                       return(
//                       <div className={classes["progress-container"]} key={i}>
//                         <p>{label}</p>

//                         <CustomizedProgressBars
//                           value={
//                             i === 0
//                               ?
//                               : i === 1
//                               ? percentage?.second || 0
//                               : percentage?.third || 0
//                           }
//                           width={60}
//                         />
//                       </div>
//                     )})}
//                   {(props.data[i].title === "Feels Like" ||
//                     props.data[i].title === "Chance of Rain") && (
//                     <div className={classes["progress-container"]}>
//                       <div className={classes["paragraph-container"]}>
//                         {props.data[i].label.map((label, i) => (
//                           <p key={i}>{label}</p>
//                         ))}
//                       </div>
//                       <CustomizedProgressBars
//                         value={humidityTestData.humidity || 0}
//                         width={200}
//                       />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// TryCard.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       svg: PropTypes.elementType.isRequired,
//       value: PropTypes.number.isRequired,
//       level: PropTypes.string,
//       label: PropTypes.arrayOf(PropTypes.string.isRequired), // Add label validation
//       // ... other properties you might have ...
//     })
//   ).isRequired,
// };
// export default TryCard;
