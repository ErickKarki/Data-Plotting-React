import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import data from "./sample_data.json";
import { blue } from "@material-ui/core/colors";
const Chart = () => (
  <div
    style={{
      width: "calc(100vw - 100px)",
      height: "calc(100vh - 200px)",
      backgroundColor: "#e3ebe7",
      padding: 20,
    }}
  >
    <ResponsiveContainer>
      <ComposedChart
        width={400}
        height={300}
        data={data.data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 60,
        }}
      >
        <CartesianGrid
          stroke="#f5f5f5"
          vertical={false}
          horizontal={true}
          strokeDasharray="1 1"
        />
        <XAxis
          dataKey="Date"
          interval={0}
          tickLine={false}
          axisLine={{ stroke: "#f5f5f5" }}
          fontSize={10}
          label={{ 
            value: "Date", 
            position: "bottom",
            offset: 0,
            style: { textAnchor: 'middle' }
          }}
          tickFormatter={(value) => {
            const date = new Date(value);
            return `${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
              .getDate()
              .toString()
              .padStart(2, "0")}-${date.getFullYear().toString().slice(-2)}`;
          }}
        />
        <Tooltip />
        <Legend verticalAlign="top" align="center" height={36} />
        <Bar
          radius={[0, 0, 0, 0]}
          dataKey="Total kWhs Used"
          barSize={45}
          fill="#40a574"
          yAxisId="left"
          legendType="rect"
          name="Total kWhs Used"
        />
        <Line
          dot={true}
          strokeWidth={2}
          strokeLinecap="round"
          type="monotone"
          dataKey="Avg Daily Temperature"
          stroke="#e00c37"
          yAxisId="right"
          legendType="rect"
          name="Average Temperature"
        />
        <YAxis
          tickLine={false}
          yAxisId="left"
          axisLine={{ stroke: "#f5f5f5" }}
          domain={[0, 3000]}
          ticks={[0, 500, 1000, 1500, 2000, 2500, 3000]}
          label={{ value: "kWh Used", angle: -90, position: "insideLeft" }}
        />
        <YAxis
          tickLine={false}
          yAxisId="right"
          orientation="right"
          stroke="#3B7AD9"
          axisLine={{ stroke: "#f5f5f5" }}
          domain={[-10, 25]}
          ticks={[-10, -5, 0, 5, 10, 15, 20, 25]}
          label={{
            value: "Temperature (°C)",
            angle: 90,
            position: "insideRight",
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
);

export default Chart;
