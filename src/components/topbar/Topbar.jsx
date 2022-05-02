import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin-dashboard</span>
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
          <img
            src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/185872471_10215171635523483_1904449185798158987_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=22iC3fjuxHcAX8h4mmr&_nc_oc=AQl1yBTscTeHFy9DaPxmrzKRrfuk4ksstIaEa8_Sd1DNpjFux_FFIsbXFkUifYTDznM&_nc_ht=scontent-frt3-1.xx&oh=00_AT8zS2rrL6N7YCUuj6zxkhPs1psn2a32coAibkMTDeiFLQ&oe=629326C2"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
