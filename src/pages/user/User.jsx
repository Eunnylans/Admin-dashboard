import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImage"
              src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/66654716_10211425723998036_9052981278244077568_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=lA-j-WcpE7gAX-uWl1L&_nc_ht=scontent-frt3-1.xx&oh=00_AT-ehXlwCp54_WVuPst6ZFwSrFojRs8CW-tCiTD05EkYYQ&oe=629823CD"
              alt=""
            />
            <div className="userShowTopTile">
              <span className="userShowTopUsername">Eunice Igbinedion</span>
              <span className="userShowTopUserTitle">Web Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowBottomTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Eunnylans</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">27.05.2021</span>
            </div>
            <span className="userShowBottomTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+49 15211 83 7448</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">Eunnylans@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Magdeburg | Germany</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label> Full Name </label>
                <input
                  type="text"
                  placeholder="Igbinedion, Eunice"
                  className="userUpdateInput1"
                />
              </div>
              <div className="userUpdateItem">
                <label> Username </label>
                <input
                  type="text"
                  placeholder="Eunnylans"
                  className="userUpdateInput1"
                />
              </div>
              <div className="userUpdateItem">
                <label> Date Of Birth </label>
                <input
                  type="text"
                  placeholder="27.05.2021"
                  className="userUpdateInput1"
                />
              </div>
              <div className="userUpdateItem">
                <label> Phone Number </label>
                <input
                  type="number"
                  placeholder="+49 5211 837 488"
                  className="userUpdateInput1"
                />
              </div>
              <div className="userUpdateItem">
                <label> email </label>
                <input
                  type="email"
                  placeholder="Eunnylans@gmail.com"
                  className="userUpdateInput1"
                />
              </div>

              <div className="userUpdateItem">
                <label> Address </label>
                <input
                  type="text"
                  placeholder="Magdeburg | Germamny"
                  className="userUpdateInput1"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImage"
                  src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/66654716_10211425723998036_9052981278244077568_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=lA-j-WcpE7gAX-uWl1L&_nc_ht=scontent-frt3-1.xx&oh=00_AT-ehXlwCp54_WVuPst6ZFwSrFojRs8CW-tCiTD05EkYYQ&oe=629823CD"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
