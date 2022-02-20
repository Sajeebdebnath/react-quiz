import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  console.log(videos);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => setPage(page + 9)}
          loader={<h4>Loading...</h4>}
          hasMore={hasMore}
        >
          {videos.map((video) => {
            return (
              <>
                {video.noq > 0 ? (
                  <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                    <Video
                      title={video.title}
                      youtubeID={video.youtubeID}
                      noq={video.noq}
                    />
                  </Link>
                ) : (
                  <Video
                    key={video.youtubeID}
                    title={video.title}
                    youtubeID={video.youtubeID}
                    noq={video.noq}
                  />
                )}
              </>
            );
          })}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was a error!</div>}
      {loading && <div>Loading</div>}
    </div>
  );
};

export default Videos;
