import React from 'react';

import { useSelector } from '../../providers/Selector';
import VideoListFav from '../../components/VideoListFav';
import VideoCard from '../../components/VideoCard';
import { FavContainer, InfoAlert } from './Favorites.styled';

function FavoritesPage() {
  const { favorites } = useSelector();

  return (
    <FavContainer>
      {favorites.length === 0 ? (
        <InfoAlert>No videos in your list, add some!</InfoAlert>
      ) : (
        <VideoListFav>
          {favorites
            .map((video) => (
              <VideoCard
                key={video.videoId}
                videoId={video.videoId}
                img={video.img}
                title={video.title}
                description={video.description}
                publishDate={new Date(video.publishDate).toDateString()}
                pathVideo={`/favorites/${video.videoId}`}
              />
          ))}
        </VideoListFav>
      )}
    </FavContainer>
  );
}

export default FavoritesPage;
