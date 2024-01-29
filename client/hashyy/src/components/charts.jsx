import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Charts() {
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
              { id: 0, value: 10, label: "Positive", color: "#00ff00" },
              { id: 1, value: 15, label: "Negative", color: "#ff0000" },
              { id: 2, value: 20, label: "Neutral", color: "#2160ff" },
            ],
          },
        ]}
        width={350}
        height={175}
      />
    </div>
  );
}
