import DashboardIcon from "@mui/icons-material/Dashboard";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";

const documentNavConfig = [
  {
    title: "dashboard",
    path: "/shop/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "All Products",
    path: "/shop/adminproduct",
    icon: <SummarizeIcon />,
  },

  {
    title: "All Orders",
    path: "/shop/order",
    icon: <SettingsIcon />,
  },
  {
    title: "Customers",
    path: "/shop/customer",
    icon: <SummarizeIcon />,
  },
  {
    title: "Settings",
    path: "/shop/setting",
    icon: <SettingsIcon />,
  },



  //
];

export default documentNavConfig;
