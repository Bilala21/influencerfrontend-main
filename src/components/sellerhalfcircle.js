import React from "react";
import { NavLink } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Withdrawable", value: 60 },
  { name: "Pending", value: 40 },
];

const COLORS = ['#0E2C6C', '#0E2C6C3D'];

const SellerHalfPieChartComponent = () => {
  return (
    <div className="w-full p-6">

      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-primary-dark text-[17px] font-medium">Withdraw-able vs Pending</h2>
        <NavLink to='/dfsds' className=" underline text-[14px] text-[#6440FB]">View all</NavLink>
      </div>


      <ResponsiveContainer width="100%" height={478}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>


      <div className="flex items-center justify-between">

        <div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary-green rounded-full"></div>
            <span>Withdrawable</span>
          </div>
          <div className="text-[#6B7177]">40%</div>
        </div>


        <div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FFEDE8] opacity-48 rounded-full"></div>
            <span>Pending Payment</span>
          </div>
          <div className="text-[#6B7177]">60%</div>
        </div>
      </div>
    </div>
  );
};

export default SellerHalfPieChartComponent;
