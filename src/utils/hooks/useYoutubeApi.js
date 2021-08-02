import { useState, useEffect, useCallback } from 'react';

function useYoutubeApi(searchTerm) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchVideos = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${new URLSearchParams({
          maxResults: 25,
          part: 'snippet',
          key: process.env.REACT_APP_YT_API_KEY,
          q: searchTerm,
        })}`
      );
      const data = await response.json();
      setVideos(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { videos, isLoading, error };
}

export default useYoutubeApi;
