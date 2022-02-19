import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Video.module.css";

const Video = ({ title, youtubeID, noq }) => {
  return (
    <Link to="/quiz">
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
    </Link>
  );
};

export default Video;
