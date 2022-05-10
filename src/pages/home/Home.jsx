import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { UserData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import React, { useState } from "react";
import VerticalSlider from "../../components/slider/VerticalSlider";
import Progressbar from "../../components/progressbar/Progressbar";

export default function Home(props) {
  const [sliderValue, setSliderValue] = useState(1);

  const getSliderValue = (value) => {
    setSliderValue(value);
  };

  const calculateNewMonth = (month) => {
    const activeUserValue = sliderValue * month["Active User"];
    const newMonthValue = { ...month, "Active User": activeUserValue };
    return newMonthValue;
  };

  const userDataTransform = UserData.map(calculateNewMonth);

  return (
    <div className="home">
      <FeaturedInfo />
      <div className="chartContainer">
        <VerticalSlider onValueSet={getSliderValue} className="chartSlider" />
        <Chart
          data={userDataTransform}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <Progressbar />
      </div>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
