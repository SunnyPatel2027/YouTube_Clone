import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="search_page">
      <div className="search_page_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
        channel="Awesome Video"
        verifired
        subs={244}
        noOfVideo={456}
        description="You can find awesome video "
      />
      <hr />

      <VideoRow
        views="374K"
        timestamp="5 day ago"
        channel="जोश Talks"
        title="मेरी Ethical Hacking को लोग हल्के में लेते थे और अब...😎🔥"
        image="https://i.ytimg.com/vi/yEvfoJ9hcX8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyx_gc1VanzZ6PVfIj_1AfOf_-ZA"
      />

      <VideoRow
        views="158K"
        timestamp="1 hour ago"
        channel="Sandeep Maheshwari"
        title="Meet Abhinay Maths (Abhinay Sharma)"
        image="https://i.ytimg.com/vi/5LTJj-EW5LM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn3v3OsthUVrWo4qSke4CULl6y2g"
      />

      <VideoRow
        views="6.9B"
        timestamp="1 day ago"
        channel="Jack Sparrow"
        title="Become a Web Developer in 10 minuts | 2022"
        image="https://i.ytimg.com/vi/7WwtzsSHdpI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqtjf07G7IewsJPqbgrdHChHhY2A"
      />
    </div>
  );
};

export default SearchPage;
