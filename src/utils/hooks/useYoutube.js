import { useState, useEffect, useCallback } from 'react';

function useYoutube(searchTerm) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchVideos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${new URLSearchParams({
          maxResults: 25,
          part: 'snippet',
          key: process.env.REACT_APP_YT_API_KEY,
          q: searchTerm,
        })}`
      );
      const data = await response.json();
      const videoList = data.items;
      setVideos([...videoList]);
    } catch (e) {
      setError(true);
    }
    setIsLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { videos, isLoading, error };
}

export { useYoutube };
