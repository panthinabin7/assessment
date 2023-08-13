import SevereColdIcon from "@mui/icons-material/SevereCold";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";

export const Data = [
  {
    id: 1,
    time: "Now",
    temperature: 27,
    probability: 23,
  },
  {
    id: 2,
    time: "10:00",
    temperature: 28,
    probability: 29,
  },
  {
    id: 3,
    time: "11:00",
    temperature: 28,
    probability: 58,
  },
  {
    id: 4,
    time: "12:00",
    temperature: 29,
    probability: 75,
  },
  {
    id: 5,
    time: "13:00",
    temperature: 30,
    probability: 33,
  },
  {
    id: 6,
    time: "14:00",
    temperature: 29,
    probability: 20,
  },
  {
    id: 7,
    time: "15:00",
    temperature: 28,
    probability: 75,
  },
];

export const detailData = [
  {
    id: 1,
    title: "Humidity",
    label: ["good", "normal", "bad"],
    svg: SevereColdIcon,
    value: 82,
    unit: function (value) {
      value = this.value;
      if (value > 60 || value < 40) {
        return "bad";
      } else {
        return "good";
      }
    },
  },
  {
    id: 2,

    title: "Wind",
    unit: "Km/hr",
    label: ["good", "normal", "bad"],
    svg: AirOutlinedIcon,
    value: 8,
  },
  {
    id: 3,
    title: "Percipitation",
    label: ["0", "50", "100"],
    value: 14,
    svg: ThunderstormIcon,
    unit: "cm",
  },
  {
    id: 4,
    title: "UV index",
    label: ["0", "5", "10+"],
    svg: WbSunnyOutlinedIcon,
    unit: "medium",
    value: 40,
  },
  {
    id: 5,
    title: "Feels Like",
    label: ["0", "50", "100"],
    svg: ThermostatOutlinedIcon,
    unit: "°",
    value: 30,
  },
  {
    id: 6,
    title: "Chance of Rain",
    label: ["0%", "25%", "50%", "75%", "100%"],
    unit: "%",
    svg: WaterDropOutlinedIcon,
    value: 42,
  },
];
