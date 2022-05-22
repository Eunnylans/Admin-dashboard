import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/185872471_10215171635523483_1904449185798158987_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=22iC3fjuxHcAX8h4mmr&_nc_oc=AQl1yBTscTeHFy9DaPxmrzKRrfuk4ksstIaEa8_Sd1DNpjFux_FFIsbXFkUifYTDznM&_nc_ht=scontent-frt3-1.xx&oh=00_AT8zS2rrL6N7YCUuj6zxkhPs1psn2a32coAibkMTDeiFLQ&oe=629326C2"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Eunice Igbinedion</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.18169-9/12240013_907675672657346_5181184731807804942_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=mwYykrkr250AX-dYk58&tn=6n4Q6I1YmwmBo1l1&_nc_ht=scontent-frx5-1.xx&oh=00_AT9_Qqt5qDdk5x1qt_QG5arJksxc8DTHM2i2LivIZCcWzg&oe=62AA50F5"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jane Uyai Udosen</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/45184320_2042923329079202_4075764113811177472_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=174925&_nc_ohc=Xt61UzjvepAAX-BuhHV&_nc_ht=scontent-frt3-1.xx&oh=00_AT8G3yz4bnT6o_rlpjhQ1qPdlzBqTmuw3GHiKB_v7zDQNQ&oe=62A92208"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Rabiat Abdullahi</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/276148744_10216202049562925_534993966247743739_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=JjwDwa3dTMAAX-nVc42&_nc_ht=scontent-frt3-1.xx&oh=00_AT9hOcXnbaD65d4lbHH9R1q-YH4RUagPf1SlLaAActnk-A&oe=6289F944"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Binta Ahmadu</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/201271602_10224089281474188_1788084152273917755_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=1mH7UIUtKaYAX9cmcc_&_nc_ht=scontent-frt3-1.xx&oh=00_AT90jIw4HckPJyU6wKlBmmRXUd9UK2T2MHfvNL63gy9EKw&oe=62AAB24A"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Vera Nneka Fine</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
