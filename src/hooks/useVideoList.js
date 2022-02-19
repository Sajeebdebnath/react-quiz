import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = (page) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      //database work
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videosQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(9)
      );

      try {
        setError(false);
        setLoading(true);

        //request database data
        const snapshot = await get(videosQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        }
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    }

    fetchVideos();
  }, [page]);
  return {
    loading,
    error,
    videos,
  };
};

export default useVideoList;
