import React from "react";
import "./VideoRow.css";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

const VideoRow = ({ views, timestamp, channel, title, image }) => {
  return (
    <div className="video_row">
      <img className="video_row_image" src={image} alt={channel} />
      <div className="video_row_text">
        <h3>{title}</h3>
        <p className="video_channel">
          {channel}
          <p className="veifired_icon">
            <CheckCircleRoundedIcon style={{ fontSize: 15 }} />
          </p>
        </p>
        <p className="video_row_detail">
          {views} views . {timestamp}
        </p>
      </div>
    </div>
  );
};

export default VideoRow;
