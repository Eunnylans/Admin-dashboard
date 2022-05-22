import "./progressBar.css";
import { CircularProgress, Typography, Box } from "@mui/material";

export default function ProgressBar({ sliderValueDis }) {
  return (
    <div className="progressBarContainer">
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          size={257}
          variant="determinate"
          value={sliderValueDis}
          text={`${sliderValueDis}%`}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         
          }}
        >
          <Typography
            size={600}
            variant="caption"
            component="div"
            color="cornflowerblue"
            fontWeight="bolder"
          >
            {`${Math.round(sliderValueDis)}%`}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
