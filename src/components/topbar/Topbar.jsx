import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import image from "../../Assets/Abies.jpg";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin-Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img src={image} alt="Eunice" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
