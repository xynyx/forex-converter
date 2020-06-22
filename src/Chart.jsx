import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Chart({ mapData }) {
  const renderLineChart = (
    <LineChart
      width={700}
      height={300}
      data={mapData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date"/>
      <YAxis tick={{fontSize: "1.3em"}}/>
      <Tooltip />
      <Legend />
      <Line
        animationDuration={500}
        strokeWidth={2.3}
        type="monotone"
        dataKey="Exchange"
        stroke="#8884d8"
        dot={false}
      />
    </LineChart>
  );

  return <div>{renderLineChart}</div>;
}
