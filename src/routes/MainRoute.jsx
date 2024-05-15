import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../module/DashboardModule";
import ProtectedRoute from "./ProtectedRoute/index";
import Map from "../module/MapModule";
import Notification from "../module/NotificationModule";
import TableList from "../module/TableModule";
import Profile from "../module/ProfileModule";
import Typography from "../module/TypographyModule";
import Upgrade from "../module/UpgradeModule";
const MainComponent = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/upgrade" element={<Upgrade />}></Route>
        <Route path="/tableList" element={<TableList />}></Route>
        <Route path="/userprofile" element={<Profile />}></Route>
        <Route path="/typography" element={<Typography />}></Route>
      </Route>
    </Routes>
  );
};

export default MainComponent;
