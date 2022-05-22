import "./slider.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";

export default function VerticalSlider({ onValueSet }) {
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onValueSet(newValue);
  };
  console.log(value);
  return (
    <div className="slider">
      <Box sx={{ height: 250 }}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
          }}
          value={value}
          onChange={handleChange}
          orientation="vertical"
          aria-label="Temperature"
          onKeyDown={preventHorizontalKeyboardNavigation}
        />
      </Box>
    </div>
  );
}
