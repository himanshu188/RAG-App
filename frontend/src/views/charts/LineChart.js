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
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     chartData: [],
  //     chartOptions: {},
  //   };
  // }

  // componentDidMount() {
  //   this.setState({
  //     chartData: lineChartData,
  //     chartOptions: lineChartOptions,
  //   });
  // }

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
