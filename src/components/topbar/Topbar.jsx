import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

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
          <img
            src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/185872471_10215171635523483_1904449185798158987_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tYsj54Yj1soAX8Wpbme&_nc_oc=AQkLaXF8Ia4ajLgti89d1juYN9RkmP-o7OCe38IvpO_Go-fmQq4xntq36IIeHor6O40&tn=6n4Q6I1YmwmBo1l1&_nc_ht=scontent-frt3-1.xx&oh=00_AT9V3aFzNdt5xs8VDi2tG3mlBIyCKKxISw1bGod_YcJ9gA&oe=6354F342"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
