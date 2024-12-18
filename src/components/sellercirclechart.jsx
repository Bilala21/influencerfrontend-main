import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { NavLink } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);



// const SellerPieChartComponent = () => {
//   return (
//     <div className="bg-white flex items-center justify-center">
//       {/* Main Card Container */}
//       <div className="w-full p-4 bg-white">
//         {/* Title */}
//         <div className="flex justify-between items-center mb-4 border-b pb-4">
//           <h2 className="text-primary-dark font-medium lg:text-[17px]">Completed Bonds</h2>
//           <button className="text-primary-dark focus:outline-none">
//             {/* Dots Icon */}
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
//             </svg>
//           </button>
//         </div>
//         <div className="flex items-center justify-between md:pt-20 md:flex-row flex-col">
//           {/* Text Info */}
//           <div className="mt-4 space-y-2 flex flex-wrap">
//             <div className="text-primary-dark md:w-full w-1/2">
//               <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></span>
//               <span className="flex-1 text-base">Total</span>
//               <div className="text-primary-gray-500">8</div>
//             </div>
//             <div className="text-primary-dark md:w-full w-1/2">
//               <div className="flex items-center">
//                 <span className="w-2 h-2 bg-yellow-200 rounded-full inline-block mr-2"></span>
//                 <span className="flex-1 text-base">Done Missions</span>
//               </div>
//               <div className="text-primary-gray-500">7</div>
//             </div>
//             <div className="text-primary-dark md:w-full w-1/2">
//               <span className="w-2 h-2 bg-red-200 rounded-full inline-block mr-2"></span>
//               <span className="flex-1 text-base">Pending Missions</span>
//               <div className="text-primary-gray-500">1</div>
//             </div>
//           </div>
//           {/* Chart Container */}
//           <div className="relative flex items-center justify-center md:order-1 -order-1">
//             {/* Circular Chart */}
//             <svg className="w-40 h-40" viewBox="0 0 36 36">
//               {/* Background Circle */}
//               <circle
//                 className="text-gray-200"
//                 stroke="currentColor"
//                 strokeWidth="3.8"
//                 fill="transparent"
//                 r="15.9155"
//                 cx="18"
//                 cy="18"
//               ></circle>
//               {/* Pending Missions Circle */}
//               <circle
//                 className="text-red-200"
//                 stroke="currentColor"
//                 strokeWidth="3.8"
//                 strokeDasharray="13.5, 100"
//                 strokeLinecap="round"
//                 fill="transparent"
//                 r="15.9155"
//                 cx="18"
//                 cy="18"
//               ></circle>
//               {/* Completed Missions Circle */}
//               <circle
//                 className="text-green-500"
//                 stroke="currentColor"
//                 strokeWidth="3.8"
//                 strokeDasharray="80, 100"
//                 strokeLinecap="round"
//                 fill="transparent"
//                 r="15.9155"
//                 cx="18"
//                 cy="18"
//               ></circle>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerPieChartComponent;




const SellerPieChartComponent = () => {

  const data = {
    labels: ["Withdrawable", "Pending Payments", "Pending Payment"],
    datasets: [
      {
        data: [40, 60, 50],
        backgroundColor: ["#FBF7ED", "#5BBB7B", "#FFEDE8"],
        borderWidth: 0,
        cutout: "70%",
        rotation: -90,
        circumference: 360,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="md:h-[350px] h-[400px] p-6 flex flex-col dobut-cart pb-5">
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-primary-dark text-[17px] font-medium">Withdraw-able vs Pending</h2>
        <NavLink to='/dfsds' className=" underline text-[14px] text-[#6440FB]">View all</NavLink>
      </div>

      <div className="flex items-center justify-between md:pt-20 md:flex-row flex-col">
      <div className="mt-4 space-y-2 flex flex-wrap min-w-[140px]">
            <div className="text-primary-dark md:w-full w-1/2">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></span>
              <span className="flex-1 text-base">Total</span>
              <div className="text-primary-gray-500">8</div>
            </div>
            <div className="text-primary-dark md:w-full w-1/2">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-200 rounded-full inline-block mr-2"></span>
                <span className="flex-1 text-base">Done Missions</span>
              </div>
              <div className="text-primary-gray-500">7</div>
            </div>
            <div className="text-primary-dark md:w-full w-1/2">
              <span className="w-2 h-2 bg-red-200 rounded-full inline-block mr-2"></span>
              <span className="flex-1 text-base">Pending Missions</span>
              <div className="text-primary-gray-500">1</div>
            </div>
          </div>
        <div className="md:order-1 -order-1 py-4">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SellerPieChartComponent;
