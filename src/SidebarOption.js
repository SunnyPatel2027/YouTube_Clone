import React from "react";
import "./SidebarOption.css";
// import HomeIcon from "@mui/icons-material/Home";
// import HomeIcon from "@material-ui/icons/Home";

const SidebarOption = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebar_option ${selected && "selected"} `}>
      <Icon className="sidebar_option_icon" />
      <h2 className="sidebar_option_title">{title}</h2>
    </div>
  );
};

export default SidebarOption;
