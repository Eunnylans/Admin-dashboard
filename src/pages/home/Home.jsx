import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { UserData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import React, { useState } from "react";
import VerticalSlider from "../../components/slider/VerticalSlider";
import ProgressBar from "../../components/progressBar/ProgressBar";

export default function Home(props) {
  const [sliderValue, setSliderValue] = useState(1);

  const getSliderValue = (value) => {
    setSliderValue(value);
  };

  const calculateNewMonth = (month) => {
    const activeUserValue = sliderValue * month["Active User"] * Math.random();
    const newMonthValue = { ...month, "Active User": activeUserValue };
    return newMonthValue;
  };

  const userDataTransform = UserData.map(calculateNewMonth);

  return (
    <div className="home">
      <FeaturedInfo sliderValueDis={sliderValue} />
      <div className="chartContainer">
        <VerticalSlider onValueSet={getSliderValue} className="chartSlider" />
        <Chart
          data={userDataTransform}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <ProgressBar
          sliderValueDis={sliderValue}
          className="chartProgressBar"
        />
      </div>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
