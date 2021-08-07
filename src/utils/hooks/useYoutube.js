import { useState, useEffect, useCallback } from 'react';

function useYoutube(searchTerm) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchSearchVideos = useCallback(async () => {
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
      setVideos(data.items);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchSearchVideos();
  }, [fetchSearchVideos]);

  return { videos, isLoading, error };
}

export default useYoutube;
