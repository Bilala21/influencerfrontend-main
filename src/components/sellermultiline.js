// import React from "react";
// import { NavLink } from "react-router-dom";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// let data = [
//   { month: "Jan", completed: 10, pending: 5, avgTime: 3, successRate: 80 },
//   { month: "Feb", completed: 15, pending: 10, avgTime: 4, successRate: 85 },
//   { month: "Mar", completed: 12, pending: 7, avgTime: 3.5, successRate: 88 },
//   { month: "Apr", completed: 18, pending: 4, avgTime: 2.8, successRate: 90 },
//   { month: "May", completed: 14, pending: 6, avgTime: 3.2, successRate: 87 },
//   { month: "Jun", completed: 20, pending: 3, avgTime: 2.5, successRate: 92 },
// ];

// const colors = {
//   completed: "#F2CCB3",
//   pending: "#B1CADB",
//   avgTime: "#C5DFB6",
//   successRate: "#EAC3E5",
// };

// const SellerMissionStatsChart = ({ state }) => {
//   data = state?.monthlyBonds
//   return (
//     <div className="w-full p-6 h-[80%]">

// <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4 lg:gap-0">
//   {/* Title */}
//   <h2 className="text-primary-dark text-[17px] font-medium mb-1 lg:mb-0">Mission Stats</h2>

//   {/* Stats Container */}
//   <div className="flex flex-wrap items-start lg:items-center gap-4 lg:gap-6">
//     {/* Completed Missions */}
//     <div className="flex items-center gap-2">
//       <div className="w-3 h-3 bg-[#FFEDE8] opacity-48 rounded-full"></div>
//       <span className="text-[10px] lg:text-[12px]">Completed Missions</span>
//     </div>

//     {/* Pending Missions */}
//     <div className="flex items-center gap-2">
//       <div className="w-3 h-3 bg-[#FFEDE8] opacity-48 rounded-full"></div>
//       <span className="text-[10px] lg:text-[12px]">Pending Missions</span>
//     </div>

//     {/* Average Fulfillment Time */}
//     <div className="flex items-center gap-2">
//       <div className="w-3 h-3 bg-[#FFEDE8] opacity-48 rounded-full"></div>
//       <span className="text-[10px] lg:text-[12px]">Average Fulfillment Time</span>
//     </div>

//     {/* Mission Success Rate */}
//     <div className="flex items-center gap-2">
//       <div className="w-3 h-3 bg-[#FFEDE8] opacity-48 rounded-full"></div>
//       <span className="text-[10px] lg:text-[12px]">Mission Success Rate</span>
//     </div>

//     {/* View All Link */}
//     <NavLink
//       className="underline text-[12px] lg:text-[14px] text-[#6440FB]"
//       to="/sdfd"
//     >
//       View all
//     </NavLink>
//   </div>
// </div>


//       {state?.monthlyBonds?.length > 0 ? <>

//         <ResponsiveContainer width="100%" height={400}>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />


//             <Line
//               type="monotone"
//               dataKey="completed"
//               stroke={colors.completed}
//               strokeWidth={2}
//               dot={{ fill: colors.completed, r: 4 }}
//             />

//             <Line
//               type="monotone"
//               dataKey="pending"
//               stroke={colors.pending}
//               strokeWidth={2}
//               dot={{ fill: colors.pending, r: 4 }}
//             />


//             <Line
//               type="monotone"
//               dataKey="avgTime"
//               stroke={colors.avgTime}
//               strokeWidth={2}
//               dot={{ fill: colors.avgTime, r: 4 }}
//             />


//             <Line
//               type="monotone"
//               dataKey="successRate"
//               stroke={colors.successRate}
//               strokeWidth={2}
//               dot={{ fill: colors.successRate, r: 4 }}
//             />


//             <Legend verticalAlign="top" align="right" />
//           </LineChart>
//         </ResponsiveContainer>
//       </> : <div className="h-full flex justify-center items-center">
//         <p>No Record Found</p>
//       </div>}


//       {/* <div className="flex justify-center mt-4 space-x-4">

//         <div className="flex items-center space-x-2">
//           <div className="w-3 h-3" style={{ backgroundColor: colors.completed }}></div>
//           <p className="text-sm text-gray-700">Completed Missions</p>
//         </div>


//         <div className="flex items-center space-x-2">
//           <div className="w-3 h-3" style={{ backgroundColor: colors.pending }}></div>
//           <p className="text-sm text-gray-700">Pending Missions</p>
//         </div>


//         <div className="flex items-center space-x-2">
//           <div className="w-3 h-3" style={{ backgroundColor: colors.avgTime }}></div>
//           <p className="text-sm text-gray-700">Avg Fulfillment Time</p>
//         </div>


//         <div className="flex items-center space-x-2">
//           <div className="w-3 h-3" style={{ backgroundColor: colors.successRate }}></div>
//           <p className="text-sm text-gray-700">Mission Success Rate</p>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default SellerMissionStatsChart;





import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { NavLink } from "react-router-dom";

Chart.register(...registerables);

const SellerMissionStatsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const missionChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Completed Missions",
            data: [12, 14, 10, 11, 9],
            borderColor: "#FDBA74",
            backgroundColor: "transparent",
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 4,
          },
          {
            label: "Pending Missions",
            data: [15, 13, 14, 12, 11],
            borderColor: "#3B82F6",
            backgroundColor: "transparent",
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 4,
          },
          {
            label: "Average Fulfillment Time",
            data: [10, 10, 12, 14, 13],
            borderColor: "#4ADE80",
            backgroundColor: "transparent",
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 4,
          },
          {
            label: "Mission Success Rate",
            data: [16, 11, 15, 16, 9],
            borderColor: "#E879F9",
            backgroundColor: "transparent",
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            beginAtZero: true,
            ticks: {
              stepSize: 5,
            },
          },
        },
      },
    });

    return () => {
      missionChart.destroy();
    };
  }, []);

  return (
    <div className="p-6 bg-white mission-chart lg:max-h-[480px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Mission Stats</h1>
        <NavLink to='/' className="text-blue-600 hover:underline font-medium">
          View All
        </NavLink>
      </div>

      {/* Chart */}
      <div className="w-full lg:h-[480px]">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default SellerMissionStatsChart;