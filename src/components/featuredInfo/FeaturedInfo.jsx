import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo({ sliderValueDis }) {
  console.log(sliderValueDis);
  return (
    <div className="featured">
      <div className={`featuredItem ${sliderValueDis > 60 && "greyBG"}`}>
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {sliderValueDis && `$${sliderValueDis * 2415 * 0.2}`}
          </span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className={`featuredItem ${sliderValueDis > 60 && "whiteBG"}`}>
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {sliderValueDis && `$${sliderValueDis * 4415 * 0.2}`}
          </span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className={`featuredItem ${sliderValueDis > 60 && "redBG"}`}>
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {sliderValueDis && `$${sliderValueDis * 2225 * 0.2}`}
          </span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
