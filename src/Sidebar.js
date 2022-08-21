import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="sidebar_link" to="/">
        <SidebarOption selected Icon={HomeIcon} title="Home" />
      </Link>
      <Link className="sidebar_link" to="/search">
        <SidebarOption Icon={WhatshotIcon} title="Trending" />
      </Link>
      <SidebarOption Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarOption Icon={VideoLibraryIcon} title="Library" />
      <SidebarOption Icon={HistoryIcon} title="History" />
      <SidebarOption Icon={OndemandVideoIcon} title="Your Video" />
      <SidebarOption Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarOption Icon={ThumbUpAltOutlinedIcon} title="Liked Video" />
      <SidebarOption Icon={ExpandMoreOutlinedIcon} title="Show more" />
    </div>
  );
};

export default Sidebar;
