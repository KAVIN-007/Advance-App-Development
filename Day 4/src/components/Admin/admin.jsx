import { useState } from "react";
import {
  LayoutDashboard,
  Gem,
  Settings,
  PersonStanding,
  BookCheck,
  Activity,
  Cuboid,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./components/admin_sidebar_comp";
import Admin_dashboard from "./components/admin_dashboard";
import Admin_reviews from "./components/admin_reviews";
import Admin_bundles from "./components/admin_bundles";
import Admin_services from "./components/admin_services";
import Admin_bookings from "./components/admin_bookings";
import Admin_users from "./components/admin_users";
import Admin_settings from "./components/admin_settings";

const sidebarItems = [
  {
    icon: <LayoutDashboard size={20} />,
    text: "Dashboard",
    component: "Admin_dashboard",
  },
  {
    icon: <BookCheck size={20} />,
    text: "Services",
    component: "Admin_services",
  },
  { icon: <Cuboid size={20} />, text: "Bundles", component: "Admin_bundles" },
  {
    icon: <PersonStanding size={20} />,
    text: "Users",
    component: "Admin_users",
  },
  { icon: <Gem size={20} />, text: "Bookings", component: "Admin_bookings" },
  { icon: <Activity size={20} />, text: "Reviews", component: "Admin_reviews" },
  {
    icon: <Settings size={20} />,
    text: "Settings",
    component: "Admin_settings",
  },
];

export default function Admin() {
  const [activeComponent, setActiveComponent] = useState("Admin_dashboard");

  const handleSidebarItemClick = (component) => {
    setActiveComponent(component);
  };

  const getComponentByName = (name) => {
    switch (name) {
      case "Admin_dashboard":
        return Admin_dashboard;
      case "Admin_reviews":
        return Admin_reviews;
      case "Admin_bundles":
        return Admin_bundles;
      case "Admin_services":
        return Admin_services;
      case "Admin_bookings":
        return Admin_bookings;
      case "Admin_users":
        return Admin_users;
      case "Admin_settings":
        return Admin_settings;
      default:
        return null;
    }
  };

  const ActiveComponent = getComponentByName(activeComponent);

  return (
    <div className="flex flex-row">
      <Sidebar>
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            active={item.component === activeComponent}
            onClick={() => handleSidebarItemClick(item.component)}
          />
        ))}
      </Sidebar>
      <div className="flex-1">
        <ActiveComponent />
      </div>
    </div>
  );
}
