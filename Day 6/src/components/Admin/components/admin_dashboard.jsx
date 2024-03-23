import React from "react";
import { UsersRound, ArrowBigUpDash } from "lucide-react";

const dashboardItems = [
  {
    title: "Users",
    amount: "300",
    change: "13%",
    since: "Since last month",
    icon: UsersRound,
  },
  {
    title: "Budget",
    amount: "$750.90",
    change: "13%",
    since: "Since last month",
    icon: UsersRound,
  },
  {
    title: "Budget",
    amount: "$750.90",
    change: "13%",
    since: "Since last month",
    icon: UsersRound,
  },
  {
    title: "Budget",
    amount: "$750.90",
    change: "13%",
    since: "Since last month",
    icon: UsersRound,
  },
];

function AdminDashboard() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full pt-4 px-4">
        <span className="text-5xl font-bold text-green-400">My Dashboard</span>
      </div>
      {dashboardItems.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 flex flex-col justify-between py-10"
        >
          <div className="bg-white border rounded-lg shadow-lg p-4 mt-10">
            <div className="flex flex-row mb-4 p-4">
              <div className="flex-1">
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {item.title}
                </span>
                <h2 className="text-xl font-bold">{item.amount}</h2>
              </div>
              <div className="flex-none">
                <div className="bg-tertiary rounded-full p-3">
                  <item.icon />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
