import React from "react";
import Chart from "react-apexcharts";

const Chart1 = () => {
  let data = [
    {
      name: "Doanh thu",
      data: [10, 18, 35, 51, 49, 24, 12],
    },
  ];
  const vehicleoptions = {
    chart: {
      height: 350,
      type: "line",
      background: "#fff",
    },
    stroke: {
      width: 7,
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      colors: ["#FFA41B"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    xaxis: {
      categories: [
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7",
        "Chủ nhật",
      ],
      labels: {
        style: {
          colors: "white",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
  };
  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <Chart options={vehicleoptions} series={data} type="line" height={350} />
    </div>
  );
};

export default Chart1;
