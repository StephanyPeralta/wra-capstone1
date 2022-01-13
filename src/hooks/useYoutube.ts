import { useState, useEffect, useCallback } from 'react';
import { VideoProps } from '../utils/types';

type VideoApi = {
  id: {
    videoId: string;
    kind: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};

function useYoutube(searchTerm: string) {
  const [videos, setVideos] = useState<VideoProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const fetchVideos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${new URLSearchParams({
          maxResults: '25',
          part: 'snippet',
          key: process.env.REACT_APP_YT_API_KEY as string,
          q: searchTerm,
        })}`
      );
      const data = await response.json();
      const videoList = data.items
      .filter((item: VideoApi) => item.id.kind === 'youtube#video')
      .map((item: VideoApi) => ({
          img: item.snippet.thumbnails.medium.url,
          title: item.snippet.title,
          description: item.snippet.description,
          videoId: item.id.videoId,
          publishDate: item.snippet.publishedAt,
          pathVideo: `/video/${item.id.videoId}`,
      }))
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
