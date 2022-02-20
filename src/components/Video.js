import React from "react";
import classes from "../styles/Video.module.css";

const Video = ({ title, youtubeID, noq }) => {
  return (
    <div className={classes.video}>
      <img
        src={`https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total Point : {noq * 5}</p>
      </div>
    </div>
  );
};

export default Video;
