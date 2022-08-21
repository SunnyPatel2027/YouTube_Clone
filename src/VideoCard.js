import React from "react";
import "./VideoCard.css";
import { Avatar } from "@material-ui/core";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className="video_card">
      <img className="video_card_thumbhnail" src={image} alt="" />
      <div className="video_info">
        <Avatar className="video_card_avtar" src={channelImage} alt={channel} />
        <div className="video_text">
          <h4>{title}</h4>
          <p className="channel_name">
            {channel}
            <p className="veifired_icon">
              <CheckCircleRoundedIcon style={{ fontSize: 15 }} />
            </p>
          </p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
