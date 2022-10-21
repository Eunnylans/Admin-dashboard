import { Visibility } from "@mui/icons-material";
import image from "../../Assets/Abies.jpg";
import "./widgetSm.css";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={image} alt="Eunice" className="widgetSmImg" />
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
          <img src={image} alt="Eunice" className="widgetSmImg" />
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
          <img src={image} alt="Eunice" className="widgetSmImg" />
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
          <img src={image} alt="Eunice" className="widgetSmImg" />
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
          <img src={image} alt="Eunice" className="widgetSmImg" />
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
