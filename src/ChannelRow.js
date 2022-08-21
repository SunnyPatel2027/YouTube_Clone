import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

const ChannelRow = ({
  image,
  channel,
  verifired,
  subs,
  noOfVideo,
  description,
}) => {
  return (
    <div className="channel_row">
      <Avatar className="channel_row_logo" src={image} alt={channel} />
      <div className="channel_row_text">
        <h4>
          {channel} {verifired && <CheckCircleRoundedIcon />}
        </h4>
        <p>
          {subs} Subscribers . {noOfVideo} Videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
