import { useMemo } from 'react';
import { Video } from '../utils/types';
import { useFetch } from './useFetch';

const parseResponse = (data: any) => {
  return data.items
    .filter((item: any) => item.id.kind === 'youtube#video')
    .map((item: any) => ({
      img: item.snippet.thumbnails.medium.url,
      title: item.snippet.title,
      description: item.snippet.description,
      videoId: item.id.videoId,
      publishDate: item.snippet.publishedAt,
      pathVideo: `/video/${item.id.videoId}`,
    }));
};

function useYoutubeSearch(searchTerm: string) {
  const params = useMemo(
    () => ({
      maxResults: '25',
      part: 'snippet',
      key: process.env.REACT_APP_YT_API_KEY as string,
      q: searchTerm,
    }),
    [searchTerm]
  );

  const { data, isLoading, error } = useFetch(
    'https://www.googleapis.com/youtube/v3/search',
    { defaultValue: [], parseResponse, params }
  );

  return { videos: data as Video[], isLoading, error };
}

export { useYoutubeSearch };
