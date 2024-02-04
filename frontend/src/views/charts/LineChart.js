import React from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "../variables/charts";

const LineChart = ({ data }) => {
  const [chartData, setChartData] = React.useState([]);
  const [chartOptions, setChartOptions] = React.useState({});

  React.useEffect(() => {
    setChartOptions(lineChartOptions);
    setChartData(data);
  });

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartData}
      type="area"
      width="100%"
      height="100%"
    />
  );
};

export default LineChart;
