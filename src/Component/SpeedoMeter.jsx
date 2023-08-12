import ReactSpeedometer from "react-d3-speedometer";

export const SpeedoMeter = () => (
  <div>
    <div>
      <ReactSpeedometer
        width={150}
        height={100}
        maxValue={40}
        needleHeightRatio={0.7}
        value={8}
        customSegmentStops={[0, 10, 20, 30, 40]}
        segmentColors={["#9399ff", "#14ffec", "#00bbf0", "#14ffec"]}
        currentValueText="8 Km/Hr"
        customSegmentLabels={[
          {
            text: "0-10",
            position: "OUTSIDE",
            color: "#d8dee9",
            fontSize: "10px",
          },
          {
            text: "10-20",
            position: "OUTSIDE",
            color: "#d8dee9",
            fontSize: "10px",
          },
          {
            text: "20-30",
            position: "OUTSIDE",
            color: "#d8dee9",
            fontSize: "10px",
          },
          {
            text: "30-40",
            position: "OUTSIDE",
            color: "#d8dee9",
            fontSize: "10px",
          },
        ]}
        ringWidth={10}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={"#a7ff83"}
        textColor={"#d8dee9"}
      />
    </div>
  </div>
);
