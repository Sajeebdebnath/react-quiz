import React, { useState } from "react";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/Video.module.css";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos } = useVideoList(page);
  console.log(videos);
  return (
    <div className={classes.videos}>
      {videos.length > 0 && (
        <>
          {videos.map((video) => {
            return (
              <Video
                key={video.youtubeID}
                title={video.title}
                youtubeID={video.youtubeID}
                noq={video.noq}
              ></Video>
            );
          })}
        </>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was a error!</div>}
      {loading && <div>Loading</div>}
    </div>
  );
};

export default Videos;
