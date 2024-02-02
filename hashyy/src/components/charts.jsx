import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Charts(sData) {
  // console.log("sData");
  // console.log(sData);
  return (
    <div
      style={{
        color: "#fff",
        fontSize: "2.5rem",
      }}
    >
      {" "}
      <PieChart
        series={[
          {
            data: [
              {
                id: 0,
                value: sData?.sData[0]?.positive,
                label: "Interesting",
                color: "#00ff00",
              },
              {
                id: 1,
                value: sData?.sData[0]?.negative,
                label: "Boring",
                color: "#ff0000",
              },
              {
                id: 2,
                value: 0,
                label: "Neutral",
                color: "#2160ff",
              },
            ],
          },
        ]}
        width={350}
        height={175}
      />
    </div>
  );
}
