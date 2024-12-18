import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { NavLink } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);





const SellerHalfPieChartComponent = () => {
  // Chart Data
  const data = {
    labels: ["Withdrawable", "Pending Payments"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#28C76F", "#FFEDE8"], 
        borderWidth: 0,
        cutout: "83%", 
        rotation: -90, 
        circumference: 180,
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
    <div className="h-[350px] p-6 flex flex-col dobut-cart">
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-primary-dark text-[17px] font-medium">Withdraw-able vs Pending</h2>
        <NavLink to='/dfsds' className=" underline text-[14px] text-[#6440FB]">View all</NavLink>
      </div>

      <Doughnut data={data} options={options} />

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
          <div>
            <p className="text-gray-700 text-sm font-medium">Withdrawable</p>
            <p className="text-gray-500 text-xs">40%</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-red-100 rounded-full"></span>
          <div>
            <p className="text-gray-700 text-sm font-medium">Pending Payments</p>
            <p className="text-gray-500 text-xs">60%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHalfPieChartComponent;

