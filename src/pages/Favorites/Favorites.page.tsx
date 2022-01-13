import React from 'react';

import { useSelector } from '../../providers/Selector';
import VideoListFav from '../../components/VideoListFav';
import { FavContainer, InfoAlert } from './Favorites.styled';

function FavoritesPage() {
  const { favorites } = useSelector();

  return (
    <FavContainer>
      {favorites.length === 0 ? (
        <InfoAlert>No videos in your list, add some!</InfoAlert>
      ) : (
        <VideoListFav videos={favorites} />
      )}
    </FavContainer>
  );
}

export default FavoritesPage;
