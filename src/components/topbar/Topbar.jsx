import React from "react";
import "./topbar.css";


import { NotificationsNone, Language, Settings } from "@mui/icons-material";
function Topbar() {
  return (
    <div className="topbar">

      <div className="topbarWrapper">

        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>

        <div className="topRight">

          <div className="topbarIconContainer">
            
          <NotificationsNone/>

          </div>

          <div className="topbarIconContainer">
          <Language/>

          </div>
          <div className="topbarIconContainer">
            <Settings/>

          </div>

          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
      </div>

      </div>

    </div>
  );
}
export default Topbar;