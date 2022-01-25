import { useMemo } from 'react';
import { Video } from '../utils/types';
import { useFetch } from './useFetch';

type YoutubeVideoResponse = Video | null;

const parseResponse = (data: any) => {
  if (data.items.length === 0) {
    return null;
  }

  const item = data.items[0];

  return {
    img: item.snippet.thumbnails.medium.url,
    title: item.snippet.title,
    description: item.snippet.description,
    videoId: item.id,
    publishDate: item.snippet.publishedAt,
    pathVideo: `/video/${item.id}`,
  };
};

function useYoutubeVideo(id: string) {
  const params = useMemo(
    () => ({
      part: 'snippet',
      key: process.env.REACT_APP_YT_API_KEY as string,
      id,
    }),
    [id]
  );

  const { data, isLoading, error } = useFetch(
    'https://youtube.googleapis.com/youtube/v3/videos',
    {
      parseResponse,
      params,
    }
  );

  return { video: data as YoutubeVideoResponse, isLoading, error };
}

export { useYoutubeVideo };
