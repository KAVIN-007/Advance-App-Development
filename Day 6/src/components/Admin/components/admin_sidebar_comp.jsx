import { MoreVertical, ChevronLast, ChevronFirst,LogOut } from "lucide-react";
import { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";
import { logo_black } from "../../../assets";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  return (
    <aside className="h-screen w-1/6 min-w-64 bg-gray-500 shadow-xl">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="pb-2 flex justify-between items-center">
          <img src={logo_black} className="w-24" alt="" />
        </div>
        <ul className="flex-1 px-3 text-xl">{children}</ul>

        <div className="border-t flex p-3">
          <img
            src={logo_black}
            alt="Admin Logo"
            className="w-10 h-10 rounded-md"
          />
          <div className="flex ml-3">
            <div className="leading-4">
              <h4 className="font-semibold">Admin</h4>
              <span className="text-xs text-gray-600">
                ServoVerve@gmail.com
              </span>
            </div>
            <LogOut size={20} className="ml-8 mt-2"/>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, onClick }) {
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
      onClick={onClick}
    >
      {icon}
      <span className="overflow-hidden w-52 ml-3">{text}</span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            alert ? "" : "top-2"
          }`}
        />
      )}
    </li>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  alert: PropTypes.bool,
  onClick: PropTypes.func.isRequired, // Add onClick prop
};
